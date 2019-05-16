
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

    /*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 *
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );


			(function() {
				// trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
				if (!String.prototype.trim) {
					(function() {
						// Make sure we trim BOM and NBSP
						var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
						String.prototype.trim = function() {
							return this.replace(rtrim, '');
						};
					})();
				}

				[].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
					// in case the input is already filled..
					if( inputEl.value.trim() !== '' ) {
						classie.add( inputEl.parentNode, 'input--filled' );
					}

					// events:
					inputEl.addEventListener( 'focus', onInputFocus );
					inputEl.addEventListener( 'blur', onInputBlur );
				} );

				function onInputFocus( ev ) {
					classie.add( ev.target.parentNode, 'input--filled' );
				}

				function onInputBlur( ev ) {
					if( ev.target.value.trim() === '' ) {
						classie.remove( ev.target.parentNode, 'input--filled' );
					}
				}
			})();
