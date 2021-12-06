// Khi người dùng cuộn chuột thì gọi hàm scrollFunction
window.onscroll = function() {scrollFunction()};
// khai báo hàm scrollFunction
function scrollFunction() {
    if (document.body.scrollTop > 95 || document.documentElement.scrollTop > 95) {
        document.querySelector(".to-top").style.display = "block";
    } else {
        document.querySelector(".to-top").style.display = "none";
    }
}
// search
const items = [
    {
        name: 'Spider man: no way home',
        link: './spider-man-no-way-home.html',
        image: 'Spider-man-no-way-home-img.jpg'// done
    },
    {
        name: 'Free Guy',
        link: './free-guy.html',
        image: 'Free-guy-img.jpg'// done
    },
    {
        name: '1917',
        link: './1917.html',
        image: '1917-img.jpg'// done
    },
    {
        name: 'Arcane',
        link: './Arcane.html',
        image: 'Arcane-img.jpg'// done
    },
    {
        name: 'Eternals',
        link: './Eternals.html',
        image: 'Eternals-img.png'// done
    },
    {
        name: 'Invisible Man',
        link: './Invisible-man.html',
        image: 'Invisible-man-img.jpg'// done
    },
    {
        name: 'Joker',
        link: './Joker.html',
        image: 'Joker-img.jpg'// done
    },
    {
        name: 'Little Women',
        link: './Little-Women.html',
        image: 'Little-women-img.jpg'// done
    },
    {
        name: 'The Medium',
        link: './Medium.html',
        image: 'The-medium-img.jpg'// done
    },
    {
        name: 'Life of Pi',
        link: './Pi.html',
        image: 'Pi-img.jpg'// done
    },
    {
        name: 'Sherlock',
        link: './Sherlock.html',
        image: 'Sherlock-img.jpg'// done
    },
    {
        name: 'The Greatest Showman',
        link: './the-greatest-showman.html',
        image: 'The-greatest-showman-img.jpg'// done
    },
]
function render() {
    var data = document.querySelector('.search-box-web').value
    var html = "";
    for (const item of items) {
        var temp = "";
        if ((item.name.toLowerCase()).indexOf(data.toLowerCase()) != -1) {
            temp = `
            <div class="col l-3 m-4 sm-12">
                <div class="search-item">
                    <img src="./assets/img/${item.image}" alt="${item.name}">
                    <a href="${item.link}"><h4>${item.name}</h4></a>
                </div>
            </div>`
        }
        html = html.concat(temp, "");
    }
    if (data == '') {
        html = items.map(item => `
        <div class="col l-3 m-4 sm-12">
            <div class="search-item">
                <img src="./assets/img/${item.image}" alt="${item.name}">
                <a href="${item.link}"><h4>${item.name}</h4></a>
            </div>
        </div>`).join('')
    }
    document.querySelector('#js-search-list').innerHTML = html
}
const search = document.querySelector('.search-box-web');
if (search != null) {
    search.onkeypress = function (d) {
        if (d.keyCode == 13){
            render()
        }
    }
}
// nav bar mobile tablet
const navOverlay = document.querySelector('.nav-overlay');
const navMobileTablet = document.querySelector('.js-nav-mobile-tablet')
function nav_open() {
    navOverlay.style.display = 'block';
    navMobileTablet.style.display = 'block';
}
function nav_exit() {
    navOverlay.style.display = 'none';
    navMobileTablet.style.display = 'none';
}

// category
const sub_nav = document.querySelector('.sub-nav-mobile-tablet')
function category_open() {
    if (sub_nav.style.display == 'none') {
        sub_nav.style.display = 'inline-block';    
    }
    else {
        sub_nav.style.display = 'none';
    }
}
