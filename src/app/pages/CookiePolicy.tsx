export function CookiePolicy() {
  return (
    <main className="min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
      <div className="text-gray-700 leading-relaxed space-y-6 text-lg">
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        
        <p>This Cookie Policy explains what cookies are and how we use them, the types of cookies we use i.e, the information we collect using cookies and how that information is used, and how to manage the cookie settings.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">What are cookies?</h2>
        <p>Cookies are small text files that are used to store small pieces of information. They are stored on your device when the website is loaded on your browser. These cookies help us make the website function properly, make it more secure, provide better user experience, and understand how the website performs and to analyze what works and where it needs improvement.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">How do we use cookies?</h2>
        <p>As most of the online services, our website uses first-party and third-party cookies for several purposes. First-party cookies are mostly necessary for the website to function the right way, and they do not collect any of your personally identifiable data.</p>
        <p className="mt-4">The third-party cookies used on our website are mainly for understanding how the website performs, how you interact with our website, keeping our services secure, providing advertisements that are relevant to you, and all in all providing you with a better and improved user experience and help speed up your future interactions with our website.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Types of Cookies we use</h2>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Essential:</strong> Some cookies are essential for you to be able to experience the full functionality of our site. They allow us to maintain user sessions and prevent any security threats. They do not collect or store any personal information.</li>
          <li><strong>Statistics:</strong> These cookies store information like the number of visitors to the website, the number of unique visitors, which pages of the website have been visited, the source of the visit, etc. These data help us understand and analyze how well the website performs and where it needs improvement.</li>
          <li><strong>Marketing:</strong> Our website displays advertisements. These cookies are used to personalize the advertisements that we show to you so that they are meaningful to you. These cookies also help us keep track of the efficiency of these ad campaigns.</li>
          <li><strong>Functional:</strong> These are the cookies that help certain non-essential functionalities on our website. These functionalities include embedding content like videos or sharing content of the website on social media platforms.</li>
          <li><strong>Preferences:</strong> These cookies help us store your settings and browsing preferences like language preferences so that you have a better and efficient experience on future visits to the website.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">How can I control the cookie preferences?</h2>
        <p>Different browsers provide different methods to block and delete cookies used by websites. You can change the settings of your browser to block/delete the cookies. To find out more about how to manage and delete cookies, visit wikipedia.org, www.allaboutcookies.org.</p>
      </div>
    </main>
  );
}