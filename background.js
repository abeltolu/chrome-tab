var sites = [
    {
        name: 'Google Mail',
        bgcolor: '#D66456',
        image: 'gmail.png',
        url: 'https://mail.google.com'
    },
    {
        name: 'ReactJS',
        bgcolor: '#000',
        image: 'react.png',
        url: 'https://reactjs.org'
    },
    {
        name: '9pay',
        bgcolor: 'transparent',
        image: '9pay.png',
        url: 'https://9pay.com.ng'
    },
    {
        name: 'Fichaya',
        bgcolor: '#FFF',
        image: 'fichaya.png',
        url: 'https://fichaya.com'
    },
    {
        name: 'Coinmarketcap',
        bgcolor: '#FFF',
        image: 'coinmarketcap.png',
        url: 'https://coinmarketcap.com'
    },
    {
        name: 'Firebase',
        bgcolor: 'transparent',
        image: 'firebase.png',
        url: 'https://firebase.com'
    }
];

sites.forEach(site => {
    var data = (
        `<a class="item" href="${site.url}">
            <div class="logo" style="
                background-image: url(assets/icons/${site.image});
                background-color: ${site.bgcolor};"></div>
            <div class="site_details">
                <p class="site_name">${site.name}</p>
                <p class="site_url">${site.url}</p>
            </div>
        </a>`
    );

    document.getElementById('most_visited_websites').innerHTML += data;
})