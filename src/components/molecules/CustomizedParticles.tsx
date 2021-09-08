import Particles from 'react-tsparticles'

export default function CustomizedParticles({
  layoutStyle,
}: {
  layoutStyle: string
}) {
  const particlesInit = (main: any) => {
      console.log('main', main)

      // You can initialize the tsParticles instance (main) here, adding custom shapes or presets
    },
    particlesLoaded = (container: any) => {
      console.log('container', container)
    }

  return (
    <div className={`rounded-full ${layoutStyle}`}>
      <Particles
        className={`w-full h-full`}
        id='tsparticles'
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          autoPlay: true,
          background: {
            color: {
              value: '#5DB0D0',
            },
            position: '50% 50%',
            repeat: 'no-repeat',
            size: 'cover',
            opacity: 1,
          },
          backgroundMask: {
            composite: 'destination-out',
            cover: {
              color: {
                value: '#fff',
              },
              opacity: 1,
            },
            enable: false,
          },
          fpsLimit: 60,
          motion: {
            disable: false,
            reduce: {
              factor: 4,
              value: true,
            },
          },
          particles: {
            color: {
              value: ['#6E4E9D', '#fff'],
              animation: {
                h: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 0.3,
                  sync: true,
                },
                s: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 1,
                  sync: true,
                },
                l: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 1,
                  sync: true,
                },
              },
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              angle: {
                offset: 0,
                value: 90,
              },
              attract: {
                distance: 200,
                rotate: {
                  x: 3000,
                  y: 3000,
                },
              },
              decay: 0,
              enable: true,
              outMode: 'out',
              random: true,
              speed: 0.5,
              straight: false,
              path: {
                clamp: true,
                delay: {
                  random: {
                    enable: false,
                    minimumValue: 0,
                  },
                  value: 0,
                },
              },
            },
            number: {
              value: 22,
              limit: 0,
            },
            opacity: {
              random: {
                enable: true,
                minimumValue: 0.4,
              },
              value: {
                min: 0.4,
                max: 0.8,
              },
              animation: {
                count: 0,
                enable: false,
                speed: 1,
                sync: false,
                destroy: 'none',
                minimumValue: 0.1,
                startValue: 'random',
              },
            },
            reduceDuplicates: false,
            shadow: {
              blur: 0,
              color: {
                value: '#000000',
              },
              enable: false,
              offset: {
                x: 0,
                y: 0,
              },
            },
            shape: {
              type: 'circle',
            },
            size: {
              random: {
                enable: true,
                minimumValue: 20,
              },
              value: {
                max: 50,
                min: 20,
              },
              animation: {
                count: 0,
                enable: true,
                speed: 8,
                sync: false,
                destroy: 'none',
                minimumValue: 30,
                startValue: 'random',
              },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  )
}
