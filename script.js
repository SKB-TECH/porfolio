

$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass('sticky')
        }
        else {
            $('.navbar').removeClass('sticky')
        }

        if (this.scroll > 500) {
            $('.scroll-up-btn').addClass('show')
        }
        else {
            $('.scroll-up-btn').removeClass('show')
        }
    })

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 })
    });


    // toggle menu.btn
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    })


    // typescript animated
    var typed = new Typed(".typing", {
        strings: ["Web Designer", " Software Developper", "Freelance"],
        typedSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    var typed = new Typed(".typing-2", {
        strings: ["Web Designer", " Software Developper", "Freelance"],
        typedSpeed: 100,
        backSpeed: 60,
        loop: true
    })
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },

            600: {
                items: 2,
                nav: false
            },

            1000: {
                items: 3,
                nav: false
            }


        }
    })
});



/* SmtpJS.com - v3.0.0 */
// var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };


btn.addEventListener('click', (e) => {

    const email = document.getElementById('email').value
    const name = document.getElementById('name').value
    const subject = document.getElementById('subject').value
    const message = document.getElementById('content').value
    const btn = document.getElementById('btn');
    e.preventDefault()

    emailjs.send("service_32blw6g", "template_21ch5jk", {
        from_name: name,
        to_name: "shako",
        message: message,
    });

})

