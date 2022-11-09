const urlInput = document.querySelector('#url');
const msgContentInput = document.querySelector('#message_content');
const sendBtn = document.querySelector('.btn__send');

// Embed inputs

const embedTitleInput = document.querySelector('#embed_title');
const embedDescriptionInput = document.querySelector('#embed_description');
const embedURLInput = document.querySelector('#embed_url');
const embedImgsInput = document.querySelector('#embed_img_url');




const sendWebhook = () => {

    const webhook_data = {
        "content": msgContentInput.value,
        "embeds": [
          {
            "title": embedTitleInput.value,
            "url": embedURLInput.value,
            "description": embedDescriptionInput.value,
            "color": 1515000,
            "image": {
                "url": embedImgsInput.value || null
              },
          }
        ]
      }
    
    fetch(urlInput.value, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(webhook_data)
    })
}

sendBtn.addEventListener('click', sendWebhook);