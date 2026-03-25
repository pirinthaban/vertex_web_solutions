export function PrivacyPolicy() {
  return (
    <main className="min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="text-gray-700 leading-relaxed space-y-6 text-lg">
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        <p>Your privacy is important to us. It is Vertex Web Solutions' policy to respect your privacy regarding any information we may collect from you across our website, and other sites we own and operate.</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Information we collect</h2>
        <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we're collecting it and how it will be used.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Use of information</h2>
        <p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we'll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Third-party access</h2>
        <p>We don't share any personally identifying information publicly or with third-parties, except when required to by law.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Your rights</h2>
        <p>You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.</p>
        
        <p className="mt-8">Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.</p>
      </div>
    </main>
  );
}