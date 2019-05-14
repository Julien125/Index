
! function() {
    var t = document.querySelectorAll('[data-toggle="animation"]');

    function a(e, t, n) {
        "fpAfterLoad" == t ? e.closest(".fp-section").classList.contains("active") && e.classList.add("animate") : e.classList.add("animate")
    }
    "load fpAfterLoad".split(" ").forEach(function(e) {
        window.addEventListener(e, function(n) {
            var o = n.type;
            [].forEach.call(t, function(e) {
                var t = e.getAttribute("data-animation-trigger");
                if ("load" == t && "load" == o && a(e, o), "fpAfterLoad" == t && "fpAfterLoad" == o) {
                    n.detail.destination.index;
                    a(e, o)
                }("enter" == t && "load" == o || "entered" == t && "load" == o) && new Waypoint.Inview({
                    element: e,
                    enter: function() {
                        "enter" == t && a(e, o)
                    },
                    entered: function() {
                        "entered" == t && a(e, o)
                    }
                })
            })
        })
    })
}(), window.addEventListener("alert.show", function(e) {
        ! function(e) {
            var t = document.createElement("div");
            t.classList.add("alert", "alert-" + e.type, "alert-fixed", "fade", "show"), t.innerHTML = e.message.replace("0 -", ""), document.body.appendChild(t), setTimeout(function() {
                $(t).alert("close")
            }, 5e3)
        }(e.detail)
    }),
    function() {
        var e = document.querySelector(".navbar"),
            t = document.querySelector(".navbar-collapse"),
            o = !1,
            a = !1,
            n = e.classList.contains("navbar-togglable");

        function l() {
            !o && n && (e.classList.remove("navbar-dark"), e.classList.add("navbar-light"), o = !0)
        }

        function r() {
            o && n && (e.classList.remove("navbar-light"), e.classList.add("navbar-dark"), o = !1)
        }

        function i(e, t) {
            if ("fpOnLeave" == e) 0 == t ? r() : l();
            else if ("collapse" == e) {
                0 == (n = window.pageYOffset) && a ? r() : l()
            } else if ("scroll" == e || "load" == e) {
                var n;
                0 == (n = window.pageYOffset) && !a && o ? r() : 0 === n || o || l()
            }
        }
        "load scroll fpOnLeave".split(" ").forEach(function(e) {
            window.addEventListener(e, function(e) {
                i(e.type, e.detail ? e.detail.destination.index : void 0)
            })
        }), $(t).on({
            "show.bs.collapse": function() {
                i("collapse"), a = !0
            },
            "hidden.bs.collapse": function() {
                i("collapse"), a = !1
            }
        })
    }(),
    function() {
        var e = document.querySelectorAll(".current-year");
        e && [].forEach.call(e, function(e) {
            ! function(e) {
                var t = (new Date).getFullYear(),
                    n = document.createTextNode(t);
                e.appendChild(n)
            }(e)
        })
    }();
