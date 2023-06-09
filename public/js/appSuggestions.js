let form = document.getElementById('uv-form');
const adress = document.getElementById('uv-address');
window.onload = function () {
    if (window.location.hash === '#discord') {
        if (localStorage.getItem('reloaded') !== 'true')
            if (
                localStorage.getItem('tabs') === 'true' &&
                window === window.top
            ) {
                window.location.replace('/tabs#discord');
            } else {
                adress.value = 'https://discord.com/login';
                form.dispatchEvent(new Event('submit'));
            }
    }
};
if (window.location.hash === '#youtube') {
    if (localStorage.getItem('reloaded') !== 'true') {
        if (localStorage.getItem('tabs') === 'true' && window === window.top) {
            window.location.replace('/tabs#youtube');
        } else {
            adress.value = 'https://youtube.com';
            form.dispatchEvent(new Event('submit'));
        }
    }
}
if (window.location.hash === '#twitter') {
    if (localStorage.getItem('reloaded') !== 'true') {
        if (localStorage.getItem('tabs') === 'true' && window === window.top) {
            window.location.replace('/tabs#twitter');
        } else {
            adress.value = 'https://twitter.com/';
            form.dispatchEvent(new Event('submit'));
        }
    }
}
if (window.location.hash === '#google') {
    if (localStorage.getItem('reloaded') !== 'true') {
        if (localStorage.getItem('tabs') === 'true' && window === window.top) {
            window.location.replace('/tabs#google');
        } else {
            adress.value = 'https://google.com/';
            form.dispatchEvent(new Event('submit'));
        }
    }
}
if (window.location.hash === '#twitch') {
    if (localStorage.getItem('reloaded') !== 'true') {
        if (localStorage.getItem('tabs') === 'true' && window === window.top) {
            window.location.replace('/tabs#twitch');
        } else {
            adress.value = 'https://twitch.tv/';
            form.dispatchEvent(new Event('submit'));
        }
    }
}
if (window.location.hash === '#reddit') {
    if (localStorage.getItem('reloaded') !== 'true') {
        if (localStorage.getItem('tabs') === 'true' && window === window.top) {
            window.location.replace('/tabs#reddit');
        } else {
            adress.value = 'https://reddit.com/';
            form.dispatchEvent(new Event('submit'));
        }
    }
}
if (window.location.hash === '#spotify') {
    if (localStorage.getItem('reloaded') !== 'true') {
        if (localStorage.getItem('tabs') === 'true' && window === window.top) {
            window.location.replace('/tabs#spotify');
        } else {
            adress.value = 'https://open.spotify.com/';
            form.dispatchEvent(new Event('submit'));
        }
    }
}
if (window.location.hash === '#geforce') {
    if (localStorage.getItem('reloaded') !== 'true') {
        if (localStorage.getItem('tabs') === 'true' && window === window.top) {
            window.location.replace('/tabs#geforce');
        } else {
            adress.value = 'https://www.nvidia.com/en-us/geforce-now/';
            form.dispatchEvent(new Event('submit'));
        }
    }
}
if (window.location.hash === '#haikei') {
    if (localStorage.getItem('reloaded') !== 'true') {
        if (localStorage.getItem('tabs') === 'true' && window === window.top) {
            window.location.replace('/tabs#haikei');
        } else {
            adress.value = 'https://haikei.xyz';
            form.dispatchEvent(new Event('submit'));
        }
    }
}
if (window.location.hash === '#pinterest') {
    if (localStorage.getItem('reloaded') !== 'true') {
        if (localStorage.getItem('tabs') === 'true' && window === window.top) {
            window.location.replace('/tabs#pinterest');
        } else {
            adress.value = 'https://pinterest.com/';
            form.dispatchEvent(new Event('submit'));
        }
    }
}
if (window.location.hash === '#github') {
    if (localStorage.getItem('reloaded') !== 'true') {
        if (localStorage.getItem('tabs') === 'true' && window === window.top) {
            window.location.replace('/tabs#github');
        } else {
            adress.value = 'https://github.com/';
            form.dispatchEvent(new Event('submit'));
        }
    }
}
if (window.location.hash.includes('#custom')) {
    // Get the custom URL after the = sign
    let customURL = window.location.hash.split('=')[1];
    if (localStorage.getItem('reloaded') !== 'true') {
        if (localStorage.getItem('tabs') === 'true' && window === window.top) {
            window.location.replace('/tabs#custom=' + customURL);
        } else {
            adress.value = customURL;
            form.dispatchEvent(new Event('submit'));
        }
    }
}
if (window.location.hash.includes('#g')) {
    // Get the custom URL after the = sign
    let customURL = window.location.hash.split('=')[1];
    if (localStorage.getItem('reloaded') !== 'true') {
        adress.value = customURL;
        form.dispatchEvent(new Event('submit'));
    }
}
if (window.location.hash.includes('#link')) {
    let link = window.location.hash.split('=')[1];
    let iframe = document.getElementById('uv-iframe');
    iframe.classList.remove('dnone');
    iframe.style.display = 'absolute';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.style.left = '0';
    iframe.style.top = '0';
    iframe.style.right = '0';
    iframe.style.zIndex = '9999';
    adress.value = link;
    form.dispatchEvent(new Event('submit'));
}
