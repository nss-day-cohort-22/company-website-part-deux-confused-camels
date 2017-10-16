// Database of contact info

let contactInfoDatabase = [{
        "name": "EMAIL",
        "location": "#contactForm",
        "tag": "Message Us",
        "logo": "./images/email_icon.svg"
    },

    {
        "name": "PHONE",
        "location": "#",
        "tag": "555.555.5555",
        "logo": "./images/phone_icon.svg"
    },
    
    {
        "name": "TWITTER",
        "location": "http://www.twitter.com",
        "tag": "Follow Us",
        "logo": "./images/twitter_icon.svg"
    },

    {
        "name": "FACEBOOK",
        "location": "http://www.facebook.com",
        "tag": "Like Us",
        "logo": "./images/facebook_icon.svg"
    },

    {
        "name": "INSTAGRAM",
        "location": "http://www.instagram.com",
        "tag": "Follow Us",
        "logo": "./images/insta_icon.svg"
    }
]

//Store database in localStorage

localStorage.setItem("contactInfoDatabaseStored", JSON.stringify(contactInfoDatabase))
