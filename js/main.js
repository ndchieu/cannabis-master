window.onload = () => {
    const onTop = {
        init: function() {
            this.btnOnTop();
        },
        btnOnTop: function() {
            window.addEventListener("scroll", () => {
                const btnTop = document.querySelector(".onTop");
                const nav = document.querySelector(".nav")
                if (window.scrollY > 50) {
                    btnTop.classList.add("show");
                    nav.classList.add("active")
                } else {
                    btnTop.classList.remove("show")
                    nav.classList.remove("active")
                }
            })
        }

    };
    onTop.init();

    const loader = {
        init: function() {
            this.load()
        },
        load: function() {
            const loaderIcon = document.querySelector(".loader");
            setTimeout(function() {
                loaderIcon.classList.add("hide")
            }, 1)
        }
    };
    loader.init();

    const sizeNav = {
        init: function() {
            this.hoverSizeNav();
        },
        hoverSizeNav: function() {
            const nav = document.querySelector(".nav");
            const background = document.querySelector(".sub__menu--background");
            const triggers = document.querySelectorAll(".item__menu");
            triggers.forEach((trigger) => {
                trigger.addEventListener("mouseenter", handleEnter)
            });
            triggers.forEach((trigger) => {
                trigger.addEventListener("mouseleave", hanleLeave)
            });

            function handleEnter() {
                background.classList.add("open");
                const dropdown = this.querySelector(".menu__sub");
                if (dropdown != null) {
                    const dropdownCoords = dropdown.getBoundingClientRect();
                    const navCoords = nav.getBoundingClientRect();
                    const coords = {
                        height: dropdownCoords.height,
                        width: dropdownCoords.width,
                        top: dropdownCoords.top,
                        left: dropdownCoords.left
                    };
                    background.style.setProperty("width", `${coords.width}px`);
                    background.style.setProperty("height", `${coords.height}px`);
                    background.style.setProperty("transform", `translate(${coords.left}px,${coords.top}px)`);
                } else {
                    background.classList.remove("open");
                }

            };

            function hanleLeave() {
                background.classList.remove("open");
            }
        }
    };
    sizeNav.init()
    const menuVertical = {
        init: function() {
            this.menuHidden();
            this.closeSubMenu();
        },
        menuHidden: function() {
            const hambeger = document.querySelector(".nav_hambeger");
            const navMenu = document.querySelector(".menu__small");
            const close = document.querySelector("#close__menu--small");
            hambeger.addEventListener("click", () => {
                navMenu.classList.add("active");
                close.classList.add("show")
            });
            close.addEventListener("click", () => {
                navMenu.classList.remove("active");
                close.classList.remove("show")
            })
        },
        closeSubMenu: function() {
            const btnMenuSub = document.querySelector(".btn__tab:nth-child(1)");
            const btnCateSub = document.querySelector(".btn__tab:nth-child(2)");
            btnCateSub.addEventListener("click", () => {
                const listCate = document.querySelector(".list__cate");
                const listMenu = document.querySelector(".list__menu");
                listCate.classList.add("active");
                listMenu.classList.add("active");
                btnCateSub.classList.add("active");
                btnMenuSub.classList.remove("active")
            });
            btnMenuSub.addEventListener("click", () => {
                const listCate = document.querySelector(".list__cate");
                const listMenu = document.querySelector(".list__menu");
                listCate.classList.remove("active");
                listMenu.classList.remove("active");
                btnMenuSub.classList.add("active")
                btnCateSub.classList.remove("active")
            })
        }
    };
    menuVertical.init()
    const video = {
        init: function() {
            this.openVid();
        },
        openVid: function() {
            const iframe = document.querySelector("iframe");
            const btnVid = document.querySelector(".icon-video");
            const close = document.querySelector("#close__menu--small");
            btnVid.addEventListener("click", () => {
                iframe.classList.add("active");
                close.classList.add("show");
            });
            close.addEventListener("click", () => {
                iframe.classList.remove("active");
            })
        }
    };
    video.init();

    const product = {
        init: function() {
            this.grabSlide();
            this.clickSlide();
        },
        grabSlide: function() {
            const slider = document.querySelector(".fea__items");
            let isDown = false;
            let startX;
            let scrollLeft;

            slider.addEventListener('mousedown', (e) => {
                isDown = true;
                slider.classList.add("active");
                startX = e.pageX - slider.offsetLeft;
                scrollLeft = slider.scrollLeft;
            });

            slider.addEventListener('mouseleave', () => {
                isDown = false;
                slider.classList.remove("active");
            });

            slider.addEventListener('mouseup', () => {
                isDown = false;
                slider.classList.remove("active");
            });

            slider.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - slider.offsetLeft;
                const walk = Math.round((x - startX) * 1);
                slider.scrollLeft = scrollLeft - walk;

            });
        },
        clickSlide: function() {
            const btnLeft = document.querySelector(".btn__left");
            const btnRight = document.querySelector(".btn__right");
            const items = document.querySelectorAll(".fea__item").length;
            var slider = document.querySelector(".fea__wrap");
            const sliderWidth = slider.offsetWidth;
            const sliderWrap = document.querySelector(".fea__items");
            var count = 1;
            // var prevSlide = function() {
            //     if (count > 1) {
            //         count = count - 2;
            //         sliderWrap.style.left = "-" + count * sliderWidth + "px";
            //         count++;
            //     } else if (count = 1) {
            //         count = items - 1;
            //         sliderWrap.style.left = "-" + count * sliderWidth + "px";
            //         count++
            //     }
            // };
            // var nextSlide = function() {
            //     if (count < items) {
            //         sliderWrap.style.left = "-" + count * sliderWidth + "px";
            //         count++;
            //     } else if (count = items) {
            //         sliderWrap.style.left = "0px;";
            //         count = 1;
            //     }
            // };
            // btnRight.addEventListener("click", () => {
            //     nextSlide()
            // });
            // btnLeft.addEventListener("click", () => {
            //     prevSlide()
            // })
        }
    };
    product.init();
    const footer = {
        init: function() {
            this.list();
        },
        list: function() {
            const btnDown = document.querySelectorAll(".i"); // icon i
            btnDown.forEach((item) => {
                item.addEventListener("click", () => {
                    item.classList.toggle("rotate");
                })
            });
        }
    };
    footer.init()
};