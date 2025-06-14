export function ContactSection() {
  return (
    <section className="pt-6 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4 text-[#49878f]">
            Get In Touch
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Have a question, or want to schedule a private session? Reach out below.
          </p>
        </div>
        
        <div className="w-full">
          <div className="w-full max-w-4xl mx-auto">
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
                overflow: 'hidden'
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