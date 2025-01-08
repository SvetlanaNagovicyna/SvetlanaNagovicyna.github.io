
(function () {


////////////////////////////////////////////////////-----------------------------------GENERAL
const {
    Engine,
    Render,
    Runner,
    World,
    Bodies,
    Body,
    Vertices,
    Query,
    MouseConstraint,
    Composites,
    Composite,
    Common,
    Constraint,
    Mouse,
} = Matter;


const engine = Engine.create();
const {world} = engine;

const canvas = document.querySelector('#headerEffectCanvas');

if (!canvas) { return };

let width = canvas.offsetWidth;
let height = canvas.offsetHeight;


// Creates a Canvas
const render = Render.create({
    element: canvas,
    engine: engine,
    options: {
        wireframes: false,
        width: width,
        height: height,
        background: 'transparent',
        pixelRatio: 1,
    },
});

Render.run(render);
Runner.run(Runner.create(), engine);

// Grab Shapes
Composite.add(
    world,
    MouseConstraint.create(engine, {
        mouse: Mouse.create(render.canvas),
        constraint: {
            render: {
                visible: false,
            },
        },
    })
);
// границы

let mouseConstraint = MouseConstraint.create(engine, {
    mouse: Mouse.create(render.canvas),
    constraint: {
        render: {
            visible: false,
        },
    },
});

Composite.add(world, mouseConstraint);


let ceiling = Bodies.rectangle(width / 2, 0, width, 40, {
    isStatic: true,
    render: {
        visible: !1,
    }
});


let ground = Bodies.rectangle(width, height, width, 5, {
    isStatic: true,
    render: {
        visible: !1,
    }
});
let wallLeft = Bodies.rectangle(0, height / 2, 1, height, {
    isStatic: true,
    render: {
        visible: !1,
    }
});
let wallRight = Bodies.rectangle(width, height / 2, 1, height, {
    isStatic: true,
    render: {
        visible: !1,
    }
});


Composite.add(world, [ceiling, ground, wallLeft, wallRight]);

let color = '#B39CCA';
if(canvas.closest('.top_section--locker')) {
    color = '#A1C888';
}
if(canvas.closest('.top_section--testimonials')) {
    color = '#99C9C6';
}


let triangles = [];
let circles = [];
let circlesBig = [];
let polygons = [];
let polygonsSmall = [];
let stars = [];
let starsBig = [];

for (let i = 0; i < 4; i++) {
    const newHeight = Math.random() * width;
    const newWidth = Math.random() * height;
    const triangle = Bodies.polygon(newHeight, newWidth, 3, 76, {
        render: {
            fillStyle: color,
            sprite: {
                yScale: 1,
                xScale: 1,
            }
        },
        chamfer: {
            radius: 18
        }
    });
    Composite.add(world, triangle);
    triangles.push(triangle);
}
for (let i = 0; i < 4; i++) {
    const newHeight = Math.random() * width;
    const newWidth = Math.random() * height;
    const circle = Bodies.circle(newHeight, newWidth, 41, {
        render: {
            fillStyle: color,
            sprite: {
                yScale: 1,
                xScale: 1,
            }

        },
    });
    Composite.add(world, circle);
    circles.push(circle);
}
for (let i = 0; i < 2; i++) {
    const newHeight = Math.random() * width;
    const newWidth = Math.random() * height;
    const circleBig = Bodies.circle(newHeight, newWidth, 65, {
        render: {
            fillStyle: color,
            sprite: {
                yScale: 1,
                xScale: 1,
            }
        },
    });
    Composite.add(world, circleBig);
    circlesBig.push(circleBig);
}
for (let i = 0; i < 2; i++) {
    const newHeight = Math.random() * width;
    const newWidth = Math.random() * height;
    const polygon = Bodies.polygon(newHeight, newWidth, 5, 78, {
        render: {
            fillStyle: color,
            sprite: {
                yScale: 1,
                xScale: 1,
            }
        },
        chamfer: {
            radius: 25
        }
    });
    Composite.add(world, polygon);
    polygons.push(polygon);
}
for (let i = 0; i < 1; i++) {
    const newHeight = Math.random() * width;
    const newWidth = Math.random() * height;
    const polygonSmall = Bodies.polygon(newWidth, newHeight, 5, 64, {
        render: {
            fillStyle: color,
            sprite: {
                yScale: 1,
                xScale: 1,
            }

        },
        chamfer: {
            radius: 25
        }
    });
    Composite.add(world, polygonSmall);
    polygonsSmall.push(polygonSmall);
}
if(canvas.closest('.top_section--locker')) {
    for (let i = 0; i < 3; i++) {
        const newHeight = Math.random() * width;
        const newWidth = Math.random() * height;
        const star = Bodies.polygon(newHeight, newWidth, 10, 64, {
            render: {
                sprite: {
                    texture: 'https://nakotne.demo.promo/wp-content/themes/nakotne/public/img/matter/star-green.svg',
                    yScale: 1,
                    xScale: 1,

                }
            },
            chamfer: {
                radius: 15
            }

        });
        Composite.add(world, star);
        stars.push(star);
    }
    for (let i = 0; i < 1; i++) {
        const newHeight = Math.random() * width;
        const newWidth = Math.random() * height;
        const starBig = Bodies.polygon(newHeight, newWidth, 10, 64, {
            render: {
                sprite: {
                    texture: 'https://nakotne.demo.promo/wp-content/themes/nakotne/public/img/matter/star-green.svg',
                    yScale: 1.1,
                    xScale: 1.1,

                }
            },
            chamfer: {
                radius: 15
            }

        });
        Composite.add(world, starBig);
        starsBig.push(starBig);

    }
} else if(canvas.closest('.top_section--testimonials')) {
    for (let i = 0; i < 3; i++) {
        const newHeight = Math.random() * width;
        const newWidth = Math.random() * height;
        const star = Bodies.polygon(newHeight, newWidth, 10, 64, {
            render: {
                sprite: {
                    texture: 'https://nakotne.demo.promo/wp-content/themes/nakotne/public/img/matter/star-mint.svg',
                    yScale: 1,
                    xScale: 1,

                }
            },
            chamfer: {
                radius: 15
            }

        });
        Composite.add(world, star);
        stars.push(star);
    }
    for (let i = 0; i < 1; i++) {
        const newHeight = Math.random() * width;
        const newWidth = Math.random() * height;
        const starBig = Bodies.polygon(newHeight, newWidth, 10, 64, {
            render: {
                sprite: {
                    texture: 'https://nakotne.demo.promo/wp-content/themes/nakotne/public/img/matter/star-mint.svg',
                    yScale: 1.1,
                    xScale: 1.1,

                }
            },
            chamfer: {
                radius: 15
            }

        });
        Composite.add(world, starBig);
        starsBig.push(starBig);

    }
} else {
    for (let i = 0; i < 3; i++) {
        const newHeight = Math.random() * width;
        const newWidth = Math.random() * height;
        const star = Bodies.polygon(newHeight, newWidth, 10, 64, {
            render: {
                sprite: {
                    texture: 'https://nakotne.demo.promo/wp-content/themes/nakotne/public/img/matter/star-violet.svg',
                    yScale: 1,
                    xScale: 1,

                }
            },
            chamfer: {
                radius: 15
            }

        });
        Composite.add(world, star);
        stars.push(star);
    }
    for (let i = 0; i < 1; i++) {
        const newHeight = Math.random() * width;
        const newWidth = Math.random() * height;
        const starBig = Bodies.polygon(newHeight, newWidth, 10, 64, {
            render: {
                sprite: {
                    texture: 'https://nakotne.demo.promo/wp-content/themes/nakotne/public/img/matter/star-violet.svg',
                    yScale: 1.1,
                    xScale: 1.1,

                }
            },
            chamfer: {
                radius: 15
            }

        });
        Composite.add(world, starBig);
        starsBig.push(starBig);

    }
}


////////////////////////////////////////////////////------------resize

document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth > 1200) {
        for (const star of stars) {
            scaleBodies(1, star)
        }
        for (const triangle of triangles) {
            scaleBodies(1, triangle)
        }
        for (const circle of circles) {
            scaleBodies(1, circle)
        }
        for (const circleBig of circlesBig) {
            scaleBodies(1, circleBig)
        }
        for (const polygon of polygons) {
            scaleBodies(1, polygon)
        }
        for (const polygonSmall of polygonsSmall) {
            scaleBodies(1, polygonSmall)
        }
        for (const starBig of starsBig) {
            scaleBodies(1, starBig)
        }

    }

    if (window.innerWidth < 1200) {
        for (const star of stars) {
            scaleBodies(.8, star)
        }
        for (const triangle of triangles) {
            scaleBodies(.8, triangle)
        }
        for (const circle of circles) {
            scaleBodies(.8, circle)
        }
        for (const circleBig of circlesBig) {
            scaleBodies(.8, circleBig)
        }
        for (const polygon of polygons) {
            scaleBodies(.8, polygon)
        }
        for (const polygonSmall of polygonsSmall) {
            scaleBodies(.8, polygonSmall)
        }
        for (const starBig of starsBig) {
            scaleBodies(.8, starBig)
        }
    }
    if (window.innerWidth < 1100) {
        for (const star of stars) {
            scaleBodies(.7, star)
        }
        for (const triangle of triangles) {
            scaleBodies(.7, triangle)
        }
        for (const circle of circles) {
            scaleBodies(.7, circle)
        }
        for (const circleBig of circlesBig) {
            scaleBodies(.7, circleBig)
        }
        for (const polygon of polygons) {
            scaleBodies(.7, polygon)
        }
        for (const polygonSmall of polygonsSmall) {
            scaleBodies(.7, polygonSmall)
        }
        for (const starBig of starsBig) {
            scaleBodies(.7, starBig)
        }
    }
    if (window.innerWidth < 1000) {
        for (const star of stars) {
            scaleBodies(.6, star)
        }
        for (const triangle of triangles) {
            scaleBodies(.6, triangle)
        }
        for (const circle of circles) {
            scaleBodies(.6, circle)
        }
        for (const circleBig of circlesBig) {
            scaleBodies(.6, circleBig)
        }
        for (const polygon of polygons) {
            scaleBodies(.6, polygon)
        }
        for (const polygonSmall of polygonsSmall) {
            scaleBodies(.6, polygonSmall)
        }
        for (const starBig of starsBig) {
            scaleBodies(.6, starBig)
        }
    }
    if (window.innerWidth <= 768) {
        for (const star of stars) {
            scaleBodies(1, star)
        }
        for (const triangle of triangles) {
            scaleBodies(1, triangle)
        }
        for (const circle of circles) {
            scaleBodies(1, circle)
        }
        for (const circleBig of circlesBig) {
            scaleBodies(1, circleBig)
        }
        for (const polygon of polygons) {
            scaleBodies(1, polygon)
        }
        for (const polygonSmall of polygonsSmall) {
            scaleBodies(1, polygonSmall)
        }
        for (const starBig of starsBig) {
            scaleBodies(1, starBig)
        }
    }
    if (window.innerWidth <= 660) {
        for (const star of stars) {
            scaleBodies(.8, star)
        }
        for (const triangle of triangles) {
            scaleBodies(.8, triangle)
        }
        for (const circle of circles) {
            scaleBodies(.8, circle)
        }
        for (const circleBig of circlesBig) {
            scaleBodies(.8, circleBig)
        }
        for (const polygon of polygons) {
            scaleBodies(.8, polygon)
        }
        for (const polygonSmall of polygonsSmall) {
            scaleBodies(.8, polygonSmall)
        }
        for (const starBig of starsBig) {
            scaleBodies(.8, starBig)
        }
    }
    if (window.innerWidth <= 560) {
        for (const star of stars) {
            scaleBodies(.7, star)
        }
        for (const triangle of triangles) {
            scaleBodies(.7, triangle)
        }
        for (const circle of circles) {
            scaleBodies(.7, circle)
        }
        for (const circleBig of circlesBig) {
            scaleBodies(.7, circleBig)
        }
        for (const polygon of polygons) {
            scaleBodies(.7, polygon)
        }
        for (const polygonSmall of polygonsSmall) {
            scaleBodies(.7, polygonSmall)
        }
        for (const starBig of starsBig) {
            scaleBodies(.7, starBig)
        }
    }
    if (window.innerWidth <= 500) {
        for (const star of stars) {
            scaleBodies(.6, star)
        }
        for (const triangle of triangles) {
            scaleBodies(.6, triangle)
        }
        for (const circle of circles) {
            scaleBodies(.6, circle)
        }
        for (const circleBig of circlesBig) {
            scaleBodies(.6, circleBig)
        }
        for (const polygon of polygons) {
            scaleBodies(.6, polygon)
        }
        for (const polygonSmall of polygonsSmall) {
            scaleBodies(.6, polygonSmall)
        }
        for (const starBig of starsBig) {
            scaleBodies(.6, starBig)
        }
    }
    if (window.innerWidth <= 410) {
        for (const star of stars) {
            scaleBodies(.5, star)
        }
        for (const triangle of triangles) {
            scaleBodies(.5, triangle)
        }
        for (const circle of circles) {
            scaleBodies(.5, circle)
        }
        for (const circleBig of circlesBig) {
            scaleBodies(.5, circleBig)
        }
        for (const polygon of polygons) {
            scaleBodies(.5, polygon)
        }
        for (const polygonSmall of polygonsSmall) {
            scaleBodies(.5, polygonSmall)
        }
        for (const starBig of starsBig) {
            scaleBodies(.5, starBig)
        }
    }
    if (window.innerWidth <= 350) {
        for (const star of stars) {
            scaleBodies(.4, star)
        }
        for (const triangle of triangles) {
            scaleBodies(.4, triangle)
        }
        for (const circle of circles) {
            scaleBodies(.4, circle)
        }
        for (const circleBig of circlesBig) {
            scaleBodies(.4, circleBig)
        }
        for (const polygon of polygons) {
            scaleBodies(.4, polygon)
        }
        for (const polygonSmall of polygonsSmall) {
            scaleBodies(.4, polygonSmall)
        }
        for (const starBig of starsBig) {
            scaleBodies(.4, starBig)
        }
    }
})
const updateCanvasSize = () => {
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;


    // Обновите размеры холста
    render.canvas.width = width;
    render.canvas.height = height;


    // Обновите размеры границ
    Body.setPosition(ceiling, {x: width / 2, y: 0});
    Body.setPosition(ground, {x: width / 2, y: height});
    Body.setPosition(wallLeft, {x: 0, y: height / 2});
    Body.setPosition(wallRight, {x: width, y: height / 2});

    if (window.innerWidth > 1200) {
        for (const star of stars) {
            scaleBodies(1, star)
        }
        for (const triangle of triangles) {
            scaleBodies(1, triangle)
        }
        for (const circle of circles) {
            scaleBodies(1, circle)
        }
        for (const circleBig of circlesBig) {
            scaleBodies(1, circleBig)
        }
        for (const polygon of polygons) {
            scaleBodies(1, polygon)
        }
        for (const polygonSmall of polygonsSmall) {
            scaleBodies(1, polygonSmall)
        }
        for (const starBig of starsBig) {
            scaleBodies(1, starBig)
        }

    }

    if (window.innerWidth < 1200) {
        for (const star of stars) {
            scaleBodies(.8, star)
        }
        for (const triangle of triangles) {
            scaleBodies(.8, triangle)
        }
        for (const circle of circles) {
            scaleBodies(.8, circle)
        }
        for (const circleBig of circlesBig) {
            scaleBodies(.8, circleBig)
        }
        for (const polygon of polygons) {
            scaleBodies(.8, polygon)
        }
        for (const polygonSmall of polygonsSmall) {
            scaleBodies(.8, polygonSmall)
        }
        for (const starBig of starsBig) {
            scaleBodies(.8, starBig)
        }
    }
    if (window.innerWidth < 1100) {
        for (const star of stars) {
            scaleBodies(.7, star)
        }
        for (const triangle of triangles) {
            scaleBodies(.7, triangle)
        }
        for (const circle of circles) {
            scaleBodies(.7, circle)
        }
        for (const circleBig of circlesBig) {
            scaleBodies(.7, circleBig)
        }
        for (const polygon of polygons) {
            scaleBodies(.7, polygon)
        }
        for (const polygonSmall of polygonsSmall) {
            scaleBodies(.7, polygonSmall)
        }
        for (const starBig of starsBig) {
            scaleBodies(.7, starBig)
        }
    }
    if (window.innerWidth < 1000) {
        for (const star of stars) {
            scaleBodies(.6, star)
        }
        for (const triangle of triangles) {
            scaleBodies(.6, triangle)
        }
        for (const circle of circles) {
            scaleBodies(.6, circle)
        }
        for (const circleBig of circlesBig) {
            scaleBodies(.6, circleBig)
        }
        for (const polygon of polygons) {
            scaleBodies(.6, polygon)
        }
        for (const polygonSmall of polygonsSmall) {
            scaleBodies(.6, polygonSmall)
        }
        for (const starBig of starsBig) {
            scaleBodies(.6, starBig)
        }
    }
    if (window.innerWidth <= 768) {
        for (const star of stars) {
            scaleBodies(1, star)
        }
        for (const triangle of triangles) {
            scaleBodies(1, triangle)
        }
        for (const circle of circles) {
            scaleBodies(1, circle)
        }
        for (const circleBig of circlesBig) {
            scaleBodies(1, circleBig)
        }
        for (const polygon of polygons) {
            scaleBodies(1, polygon)
        }
        for (const polygonSmall of polygonsSmall) {
            scaleBodies(1, polygonSmall)
        }
        for (const starBig of starsBig) {
            scaleBodies(1, starBig)
        }
    }
    if (window.innerWidth <= 660) {
        for (const star of stars) {
            scaleBodies(.8, star)
        }
        for (const triangle of triangles) {
            scaleBodies(.8, triangle)
        }
        for (const circle of circles) {
            scaleBodies(.8, circle)
        }
        for (const circleBig of circlesBig) {
            scaleBodies(.8, circleBig)
        }
        for (const polygon of polygons) {
            scaleBodies(.8, polygon)
        }
        for (const polygonSmall of polygonsSmall) {
            scaleBodies(.8, polygonSmall)
        }
        for (const starBig of starsBig) {
            scaleBodies(.8, starBig)
        }
    }
    if (window.innerWidth <= 560) {
        for (const star of stars) {
            scaleBodies(.7, star)
        }
        for (const triangle of triangles) {
            scaleBodies(.7, triangle)
        }
        for (const circle of circles) {
            scaleBodies(.7, circle)
        }
        for (const circleBig of circlesBig) {
            scaleBodies(.7, circleBig)
        }
        for (const polygon of polygons) {
            scaleBodies(.7, polygon)
        }
        for (const polygonSmall of polygonsSmall) {
            scaleBodies(.7, polygonSmall)
        }
        for (const starBig of starsBig) {
            scaleBodies(.7, starBig)
        }
    }
    if (window.innerWidth <= 500) {
        for (const star of stars) {
            scaleBodies(.6, star)
        }
        for (const triangle of triangles) {
            scaleBodies(.6, triangle)
        }
        for (const circle of circles) {
            scaleBodies(.6, circle)
        }
        for (const circleBig of circlesBig) {
            scaleBodies(.6, circleBig)
        }
        for (const polygon of polygons) {
            scaleBodies(.6, polygon)
        }
        for (const polygonSmall of polygonsSmall) {
            scaleBodies(.6, polygonSmall)
        }
        for (const starBig of starsBig) {
            scaleBodies(.6, starBig)
        }
    }
    if (window.innerWidth <= 410) {
        for (const star of stars) {
            scaleBodies(.5, star)
        }
        for (const triangle of triangles) {
            scaleBodies(.5, triangle)
        }
        for (const circle of circles) {
            scaleBodies(.5, circle)
        }
        for (const circleBig of circlesBig) {
            scaleBodies(.5, circleBig)
        }
        for (const polygon of polygons) {
            scaleBodies(.5, polygon)
        }
        for (const polygonSmall of polygonsSmall) {
            scaleBodies(.5, polygonSmall)
        }
        for (const starBig of starsBig) {
            scaleBodies(.5, starBig)
        }
    }
    if (window.innerWidth <= 350) {
        for (const star of stars) {
            scaleBodies(.4, star)
        }
        for (const triangle of triangles) {
            scaleBodies(.4, triangle)
        }
        for (const circle of circles) {
            scaleBodies(.4, circle)
        }
        for (const circleBig of circlesBig) {
            scaleBodies(.4, circleBig)
        }
        for (const polygon of polygons) {
            scaleBodies(.4, polygon)
        }
        for (const polygonSmall of polygonsSmall) {
            scaleBodies(.4, polygonSmall)
        }
        for (const starBig of starsBig) {
            scaleBodies(.4, starBig)
        }
    }


    // Обновите размеры ограничивающего прямоугольника мыши
    Mouse.setScale(mouseConstraint.mouse, {x: 1 / render.pixelRatio, y: 1 / render.pixelRatio});
};

// Вызывайте функцию при изменении размеров окна
window.addEventListener('resize', updateCanvasSize);


// Вызовите функцию после создания сцены для инициализации размеров
updateCanvasSize();

////////////////////////////////////////////////////////------------resize
function scaleBodies(scale, el) {
    if (el.render.sprite.xScale !== scale) {
        let newScale = scale / el.render.sprite.xScale;
        el.render.sprite.xScale = scale;
        el.render.sprite.yScale = scale;
        Body.scale(el, newScale, newScale)
    }

};

})();