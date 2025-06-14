export function ContactSection() {
  return (
    <section className="pt-6 pb-12 bg-white">
      <div className="max-w-5xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4 text-[#49878f]">
            Get In Touch
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Have a question, or want to schedule a private session? Reach out below.
          </p>
        </div>
        
        <div className="w-full">
          <div className="w-full mx-auto">
            <iframe
              src="https://us5.list-manage.com/contact-form?u=1d139a47cd1264b937687c37e&form_id=570823f6e3a6f36704ea241f7201c8ac"
              width="100%"
              height="1100"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              style={{
                border: 'none',
                backgroundColor: 'transparent',
                overflow: 'hidden',
                margin: '0',
                padding: '0'
              }}
              title="Contact Form"
            >
              Loading contact form...
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}