export function TermsOfService() {
  return (
    <main className="min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <div className="text-gray-700 leading-relaxed space-y-6 text-lg">
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Terms</h2>
        <p>By accessing the website at Vertex Web Solutions, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use License</h2>
        <p>Permission is granted to temporarily download one copy of the materials (information or software) on Vertex Web Solutions' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>modify or copy the materials;</li>
          <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
          <li>attempt to decompile or reverse engineer any software contained on Vertex Web Solutions' website;</li>
          <li>remove any copyright or other proprietary notations from the materials; or</li>
          <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Disclaimer</h2>
        <p>The materials on Vertex Web Solutions' website are provided on an 'as is' basis. Vertex Web Solutions makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Limitations</h2>
        <p>In no event shall Vertex Web Solutions or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Vertex Web Solutions' website, even if Vertex Web Solutions or a Vertex Web Solutions authorized representative has been notified orally or in writing of the possibility of such damage.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Revisions and Errata</h2>
        <p>The materials appearing on Vertex Web Solutions' website could include technical, typographical, or photographic errors. Vertex Web Solutions does not warrant that any of the materials on its website are accurate, complete or current. Vertex Web Solutions may make changes to the materials contained on its website at any time without notice.</p>
      </div>
    </main>
  );
}