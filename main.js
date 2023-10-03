import './style.css'

document.querySelector('#app').innerHTML = `
<div class="container mx-auto py-8">

  <div class="max-w-md mx-auto bg-sky-100 p-8 border rounded shadow-lg">

    <h1 class="text-2xl font-semibold mb-4">Send Email</h1>

      <form id="formulario" action="#" method="post">

          <div class="mb-4">
              <label for="sender" class="block text-gray-600 font-semibold mb-2">Sender</label>
              <input type="email" id="sender" placeholder = "Example: d_novao@hotmail.com" name="sender" class="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500">
          </div>

          <div class="mb-4">
              <label for="recipient" class="block text-gray-600 font-semibold mb-2" >Recipient</label>
              <input type="email" id="recipient" name="recipient" placeholder = "Example: d_novao@hotmail.com" class="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500">
          </div>

          <div class="mb-4">
              <label for="subject" class="block text-gray-600 font-semibold mb-2">Subject</label>
              <input type="text" id="subject" name="subject" placeholder = "Email subject" class="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500">
          </div>

          <div class="mb-6">
              <label for="message" class="block text-gray-600 font-semibold mb-2">Message</label>
              <textarea id="message" name="message" rows="4" placeholder = "Email Message" class="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"></textarea>
          </div>

          <div class="text-center">
              <button type="submit" class="bg-blue-500 text-white opacity-30 font-semibold py-2 px-4 rounded" disabled>Send Email</button>
          
              <button type="reset" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"> Delete </button>
          </div>
      </form>
  </div>
</div>
`
