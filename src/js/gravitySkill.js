import * as Matter from 'matter-js';

export default function gravitySkill(canvas) {

    var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Composites = Matter.Composites,
        Common = Matter.Common,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        Composite = Matter.Composite,
        Bodies = Matter.Bodies;


    // create engine
    var engine = Engine.create(),
        world = engine.world;

    // create renderer
    var render = Render.create({
        element: canvas,
        engine: engine,
        options: {
            width: window.innerWidth,
            height: window.innerHeight,
            showAngleIndicator: false,
            wireframes: false,
            background: 'rgb(255,255,255)'
        }
    });

    Render.run(render);

    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);

    // add bodies
    var offset = 10,
        options = {
            isStatic: true,
            render: {
                fillStyle: 'white',
                strokeStyle: 'white',
            }
        };

    world.bodies = [];

    let size = 500;
    let scale = 1;
    if (window.innerWidth < 768) {
        size *= 0.2;
        scale *= 0.2;
    }
    else if (window.innerWidth < 1500) {
        size *= 0.4;
        scale *= 0.4;
    } else {
        size /= 2;
        scale /= 2;
    }


    // these static walls will not be rendered in this sprites example, see options
    Composite.add(world, [
        Bodies.rectangle(window.innerWidth / 2, window.innerHeight - 10, window.innerWidth + 2 * offset, 50.5, options),
        Bodies.rectangle(window.innerWidth, 200, 1, render.options.width, options),
        Bodies.rectangle(1, 200, 1, window.innerWidth, options),
        Bodies.circle(window.innerWidth * 0.3, 0, size * 0.8, {
            render: {
                sprite: {
                    texture: '../f2.png',
                    xScale: scale * 0.8,
                    yScale: scale * 0.8
                },
                chamfer: { radius: 10 }
            }
        }),
        Bodies.circle(window.innerWidth * 0.8, size * 2, size, {
            render: {
                sprite: {
                    texture: '../f7.png',
                    xScale: scale,
                    yScale: scale
                },
                chamfer: { radius: 10 }
            }
        }),
        Bodies.rectangle(window.innerWidth * 0.7, 0, size * 2, size * 2 * 0.75, {
            render: {
                sprite: {
                    texture: '../f1.png',
                    xScale: scale * 0.75,
                    yScale: scale * 0.75
                },
                chamfer: { radius: 10 }
            }
        }),
        Bodies.circle(window.innerWidth * 0.5, size * -2, size, {
            render: {
                sprite: {
                    texture: '../f3.png',
                    xScale: scale,
                    yScale: scale
                },
                chamfer: { radius: 10 }
            }
        }),
        Bodies.circle(window.innerWidth * 0.2, size * -2, size * 0.8, {
            render: {
                sprite: {
                    texture: '../f6.png',
                    xScale: scale * 0.8,
                    yScale: scale * 0.8
                },
                chamfer: { radius: 10 }
            }
        }),
        Bodies.circle(window.innerWidth * 0.5, size * -2, size, {
            render: {
                sprite: {
                    texture: '../f4.png',
                    xScale: scale,
                    yScale: scale
                },
                chamfer: { radius: 10 }
            }
        }),
        Bodies.circle(window.innerWidth * 0.2, size * -2, size / 3, {
            render: {
                sprite: {
                    texture: '../f5.png',
                    xScale: scale / 3,
                    yScale: scale / 3
                },
                chamfer: { radius: 10 }
            }
        }),
    ]);

    // add mouse control
    var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

    Composite.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // fit the render viewport to the scene
    Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: window.innerWidth, y: window.innerHeight }
    });

    // window.addEventListener('resize', setSize);

    // function setSize() {
    //     canvas.width = window.innerWidth
    // }


    mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
    mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);
}