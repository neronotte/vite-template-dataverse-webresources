const config = {
    title: 'My Application',
    titles: [{
        lcid: 1040,
        label: 'Mia applicazione'
    }],
    description: 'This is a sample application configuration.',
    descriptions: [{
        lcid: 1040,
        label: 'Esempio d'
    }],
    items: [
        {
            type: "Table",
            name: "account"
        },
        {
            type: "Table",
            name: "contact"
        },
        {
            type: "WebResource",
            name: "ava_/page.html",
            title: "Web Resource Example",
            description: "This is a web resource example. It can be used to display custom HTML content. You can include any HTML, CSS, or JavaScript you need. For example, you can create a dashboard or a custom form. Make sure to reference the correct path for your web resource.",
        },
        {
            type: "Url",
            url: "https://www.google.com",
            title: "Google",
            description: "This is a link to Google.",
        },
    ]
}

export default config;