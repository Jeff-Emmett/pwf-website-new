#!/usr/bin/env node

/**
 * Simple deployment test script
 * This script tests the basic functionality of the Cloudflare Pages deployment
 */

const https = require('https');
const http = require('http');

function makeRequest(url, options = {}) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    
    const req = client.request(url, {
      method: options.method || 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const jsonData = data ? JSON.parse(data) : null;
          resolve({ status: res.statusCode, data: jsonData, headers: res.headers });
        } catch (e) {
          resolve({ status: res.statusCode, data, headers: res.headers });
        }
      });
    });
    
    req.on('error', reject);
    
    if (options.body) {
      req.write(JSON.stringify(options.body));
    }
    
    req.end();
  });
}

async function testDeployment(baseUrl) {
  console.log(`Testing deployment at: ${baseUrl}`);
  console.log('='.repeat(50));
  
  const tests = [
    {
      name: 'Homepage loads',
      test: () => makeRequest(`${baseUrl}/`),
      expected: (result) => result.status === 200
    },
    {
      name: 'Classes API endpoint',
      test: () => makeRequest(`${baseUrl}/api/classes`),
      expected: (result) => result.status === 200 && Array.isArray(result.data)
    },
    {
      name: 'Newsletter API endpoint (POST)',
      test: () => makeRequest(`${baseUrl}/api/newsletter`, {
        method: 'POST',
        body: {
          email: 'test@example.com',
          agreedToTerms: true
        }
      }),
      expected: (result) => result.status === 201 || result.status === 200
    },
    {
      name: 'Contact API endpoint (POST)',
      test: () => makeRequest(`${baseUrl}/api/contact`, {
        method: 'POST',
        body: {
          name: 'Test User',
          email: 'test@example.com',
          message: 'This is a test message'
        }
      }),
      expected: (result) => result.status === 201
    }
  ];
  
  let passed = 0;
  let failed = 0;
  
  for (const test of tests) {
    try {
      console.log(`Testing: ${test.name}...`);
      const result = await test.test();
      
      if (test.expected(result)) {
        console.log(`✅ PASSED: ${test.name}`);
        passed++;
      } else {
        console.log(`❌ FAILED: ${test.name}`);
        console.log(`   Status: ${result.status}`);
        console.log(`   Response: ${JSON.stringify(result.data, null, 2)}`);
        failed++;
      }
    } catch (error) {
      console.log(`❌ ERROR: ${test.name}`);
      console.log(`   Error: ${error.message}`);
      failed++;
    }
    console.log('');
  }
  
  console.log('='.repeat(50));
  console.log(`Results: ${passed} passed, ${failed} failed`);
  
  if (failed === 0) {
    console.log('🎉 All tests passed! Your deployment is working correctly.');
  } else {
    console.log('⚠️  Some tests failed. Please check the deployment.');
  }
  
  return failed === 0;
}

// Get URL from command line argument or use default
const baseUrl = process.argv[2] || 'http://localhost:5173';

testDeployment(baseUrl)
  .then(success => process.exit(success ? 0 : 1))
  .catch(error => {
    console.error('Test script error:', error);
    process.exit(1);
  });
