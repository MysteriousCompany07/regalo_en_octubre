import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const PHOTO = "/images/nuestra-foto.jpg"

const reasons = [
  [
    "01",
    "Tu forma de cuidarme",
    "Porque haces que incluso los días difíciles se sientan como un lugar seguro.",
  ],
  [
    "02",
    "Tu risa",
    "Porque es mi sonido favorito y siempre consigue devolverle luz a mi mundo.",
  ],
  [
    "03",
    "Cómo me miras",
    "Porque en tus ojos encuentro hogar, calma y todas las aventuras que aún nos esperan.",
  ],
  [
    "04",
    "Quién soy contigo",
    "Porque a tu lado puedo ser completamente yo, y aun así sentirme extraordinaria.",
  ],
]
const quips = [
  "JAJAJA, por ahí no 🤣",
  "Esa opción no existe, mi amor 😘",
  "Inténtalo otra vez 😂",
  "Tú sabes que sí me amas ❤️",
]
const letterParagraphs = [
  "A veces me pongo a pensar en lo increíble que es la vida, porque entre tantas personas, tantos caminos y tantas casualidades, terminó poniéndote a ti en el mío. Y aunque no todos nuestros días sean perfectos, aunque a veces nos cueste entendernos y aunque tengamos momentos en los que parece que todo se nos viene encima, hay algo que quiero que nunca olvides: te amo con todo mi corazón.",
  "Mi amor, yo sé que a veces tenemos seis días difíciles por cada siete de la semana, JAJAJA, pero incluso en esos días en los que discutimos, en los que las cosas no salen como queremos o en los que sentimos que ya no podemos más, yo sigo queriendo que seas tú. Porque amar no es solamente estar cuando todo es bonito, también es aprender a cuidarnos cuando las cosas se ponen difíciles.",
  "No quiero prometerte una vida sin problemas, porque sé que eso sería imposible. Pero sí quiero prometerte que mientras los dos sigamos eligiéndonos, voy a poner todo de mi parte para que encontremos la manera de salir adelante. Quiero que aprendamos de nuestros errores, que tengamos paciencia, que nos escuchemos y que nunca permitamos que el orgullo sea más grande que el amor que sentimos.",
  "Quiero que sepas que no tengo planes de irme de tu lado. Que cuando pienso en mi futuro, inevitablemente apareces tú. Te imagino conmigo cumpliendo metas, celebrando nuestros logros, construyendo nuestros sueños y recordando algún día todas esas dificultades que logramos superar juntos.",
  "Y si algún día sientes que el mundo pesa demasiado, quiero que recuerdes que conmigo puedes descansar. No tienes que ser fuerte todo el tiempo, no tienes que tener todas las respuestas ni fingir que todo está bien. Quiero ser esa persona con la que puedas ser tú mismo, sin miedo, sin máscaras y sin sentirte solo.",
  "Tal vez no siempre encuentre las palabras correctas. Tal vez a veces sea complicada, sensible, intensa o demasiado sentimental, pero si hay algo de lo que nunca quiero que dudes es de lo muchísimo que te amo. Incluso cuando estoy molesta contigo, incluso cuando no sé cómo expresarme, mi corazón sigue teniendo un lugar que es solamente tuyo.",
  "Yo no quiero un amor perfecto de película. Quiero nuestro amor, con nuestras risas, nuestras locuras, nuestras conversaciones interminables, nuestros abrazos y hasta nuestras diferencias. Pero, sobre todo, quiero un amor en el que los dos nos sintamos seguros, respetados y felices.",
  "Y si la vida nos pone mil obstáculos, quiero que intentemos superarlos de la mano. Que cuando uno se canse, el otro le recuerde por qué empezamos. Que cuando tengamos miedo, encontremos valor en nosotros. Que cuando las cosas se compliquen, recordemos que no somos enemigos, sino dos personas que se aman y están aprendiendo a caminar juntas.",
  "Gracias por los momentos bonitos, por cada sonrisa que me has regalado, por los recuerdos que guardo como pequeños tesoros y por todas las veces que me has hecho sentir amada.",
  "Si pudiera volver atrás y vivir nuevamente nuestra historia, seguiría queriendo conocerte. Porque a pesar de todo, hay algo que tengo muy claro: eres una de las personas más importantes de mi vida y quiero seguir construyendo recuerdos contigo.",
  "No sé exactamente qué nos espera mañana, mi amor, pero sí sé lo que deseo hoy: seguir eligiéndote, seguir creciendo contigo y seguir encontrando razones para amarnos cada día mejor.",
  "Te amo más de lo que muchas veces mis palabras consiguen explicar. Y si alguna vez olvidas cuánto significas para mí, vuelve a abrir esta carta. Aquí siempre tendrás un pedacito de mi corazón. ❤️",
]

function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props} />
}

function HeartRain({ count = 22 }: { count?: number }) {
  return (
    <div className="heart-rain" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <motion.span
          key={i}
          initial={{ y: -60, opacity: 0, rotate: 0 }}
          animate={{
            y: "110vh",
            opacity: [0, 0.8, 0.8, 0],
            rotate: i % 2 ? 180 : -180,
          }}
          transition={{
            duration: 3.5 + (i % 5),
            delay: (i % 9) * 0.17,
            ease: "linear",
          }}
          style={{
            left: `${(i * 47) % 97}%`,
            fontSize: `${12 + (i % 4) * 5}px`,
          }}
        >
          {i % 3 === 0 ? "♡" : "♥"}
        </motion.span>
      ))}
    </div>
  )
}

function FloatingHearts() {
  return (
    <div className="floating-hearts" aria-hidden="true">
      {Array.from({ length: 14 }, (_, i) => (
        <span
          key={i}
          style={{
            left: `${(i * 23) % 96}%`,
            animationDelay: `${-(i * 1.3)}s`,
          }}
        >
          ♡
        </span>
      ))}
    </div>
  )
}

function Envelope({ opening }: { opening: boolean }) {
  return (
    <div
      className={`envelope-scene ${opening ? "is-opening" : ""}`}
      aria-label="Sobre color crema"
    >
      <div className="envelope-letter">
        <span>Para ti, mi amor</span>
        <strong>♡</strong>
      </div>
      <div className="envelope">
        <div className="envelope-back" />
        <div className="flap" />
        <div className="envelope-front" />
        <div className="envelope-copy">To My Favorite Person ♡</div>
        <div className="seal">♥</div>
      </div>
    </div>
  )
}

function Intro({ onOpen }: { onOpen: () => void }) {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 })
  const noButton = useRef<HTMLButtonElement>(null)
  const noTransform = useRef({ x: 0, y: 0 })
  const [quip, setQuip] = useState("")
  const [opening, setOpening] = useState(false)
  const [celebrate, setCelebrate] = useState(false)

  const escape = () => {
    const button = noButton.current
    if (!button) return
    const rect = button.getBoundingClientRect()
    const baseLeft = rect.left - noTransform.current.x
    const baseTop = rect.top - noTransform.current.y
    const yesRect = document
      .querySelector(".yes-button")
      ?.getBoundingClientRect()
    const margin = 18
    const maxLeft = Math.max(margin, window.innerWidth - rect.width - margin)
    const maxTop = Math.max(margin, window.innerHeight - rect.height - margin)
    let left = margin
    let top = margin

    for (let attempt = 0; attempt < 20; attempt += 1) {
      left = margin + Math.random() * (maxLeft - margin)
      top = margin + Math.random() * (maxTop - margin)
      const overlapsYes =
        yesRect &&
        left < yesRect.right + 20 &&
        left + rect.width > yesRect.left - 20 &&
        top < yesRect.bottom + 20 &&
        top + rect.height > yesRect.top - 20
      if (!overlapsYes && Math.hypot(left - rect.left, top - rect.top) > 110)
        break
    }

    const next = { x: left - baseLeft, y: top - baseTop }
    noTransform.current = next
    setNoPos(next)
    setQuip(quips[Math.floor(Math.random() * quips.length)])
  }

  const yes = () => {
    setCelebrate(true)
    setTimeout(() => setOpening(true), 650)
    setTimeout(onOpen, 2900)
  }

  useEffect(() => {
    const proximity = (e: PointerEvent) => {
      const el = document.getElementById("no-button")
      if (!el) return
      const r = el.getBoundingClientRect()
      const d = Math.hypot(
        e.clientX - (r.left + r.width / 2),
        e.clientY - (r.top + r.height / 2),
      )
      if (d < 105) escape()
    }
    window.addEventListener("pointermove", proximity)
    return () => window.removeEventListener("pointermove", proximity)
  }, [])

  return (
    <motion.main
      className="intro"
      exit={{ opacity: 0, scale: 1.03 }}
      transition={{ duration: 0.8 }}
    >
      {celebrate && <HeartRain count={30} />}
      <div className="eyebrow">A LITTLE SOMETHING FOR YOU</div>
      <motion.div
        className="intro-copy"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <p>Mi amor, antes de abrir esta carta tengo una preguntita...</p>
        <h1>
          ¿Me amas? <span>🥹❤️</span>
        </h1>
      </motion.div>
      {celebrate && (
        <motion.p
          className="knew"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Yo sabía que me amabas, mi vida. 🥹❤️
        </motion.p>
      )}
      <Envelope opening={opening} />
      {!celebrate && (
        <div className="choices">
          <Button className="yes-button" onClick={yes}>
            Sí, muchísimo <span>❤️</span>
          </Button>
          <motion.button
            ref={noButton}
            id="no-button"
            className="no-button"
            tabIndex={-1}
            aria-label="Opción juguetona que se escapa"
            animate={{
              x: noPos.x,
              y: noPos.y,
              rotate: noPos.x ? [0, -4, 4, 0] : 0,
            }}
            transition={{ type: "spring", stiffness: 520, damping: 22 }}
            onPointerDown={(e) => {
              e.preventDefault()
              escape()
            }}
            onMouseEnter={escape}
          >
            No 🙄
          </motion.button>
          <AnimatePresence mode="wait">
            {quip && (
              <motion.div
                key={quip}
                className="quip"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {quip}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
      <p className="hint">Una carta hecha con todo mi corazón</p>
    </motion.main>
  )
}

function Letter() {
  const reduced = useReducedMotion()
  const [flipped, setFlipped] = useState<number[]>([])
  const [surprise, setSurprise] = useState(false)
  const reveal = {
    initial: { opacity: 0, y: reduced ? 0 : 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: reduced ? 0 : 0.8 },
  }
  return (
    <motion.main
      className="letter-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <header className="hero">
        <motion.div {...reveal}>
          <div className="eyebrow">A LOVE LETTER · JUST FOR YOU</div>
          <h1>
            To the Love
            <br />
            of My Life <em>♡</em>
          </h1>
          <p>
            Every love story is beautiful,
            <br />
            but ours is my favorite.
          </p>
        </motion.div>
        <motion.div
          className="polaroid"
          initial={{ opacity: 0, rotate: 0, y: 40 }}
          animate={{ opacity: 1, rotate: 2.5, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9 }}
        >
          <img src={PHOTO} alt="Michelle y su novio juntos" />
          <div>
            My favorite place is
            <br />
            wherever you are. <span>♡</span>
          </div>
          <small>Photo by Manuela Mejía, el amor de tu vida. ❤️</small>
        </motion.div>
      </header>

      <section className="paper">
        <motion.div className="paper-heading" {...reveal}>
          <span>PARA MI PERSONA FAVORITA</span>
          <h2>
            Mi amor, mi persona favorita: <em>❤️</em>
          </h2>
        </motion.div>
        <div className="body-copy">
          {letterParagraphs.map((paragraph, index) => (
            <motion.div
              className={`letter-block ${index === 10 ? "letter-promise" : ""}`}
              key={paragraph}
              initial={{ opacity: 0, y: reduced ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: reduced ? 0 : 0.75 }}
            >
              <p>{paragraph}</p>
              {[2, 5, 8].includes(index) && (
                <span className="love-divider" aria-hidden="true">
                  ♡
                </span>
              )}
            </motion.div>
          ))}
          <div className="signature">
            <strong>
              Con todo mi amor, por siempre y para siempre, tu Michelle. ❤️
            </strong>
            <b aria-hidden="true">♥</b>
          </div>
        </div>
      </section>

      <section className="reasons">
        <motion.div className="section-title" {...reveal}>
          <span>JUST A FEW OF THE</span>
          <h2>Reasons Why I Love You</h2>
          <p>Toca cada carta para descubrir un pedacito de mi corazón.</p>
        </motion.div>
        <div className="reason-grid">
          {reasons.map((reason, i) => {
            const open = flipped.includes(i)
            return (
              <motion.div
                key={reason[0]}
                className={`reason-card ${open ? "flipped" : ""}`}
                {...reveal}
              >
                <Button
                  onClick={() =>
                    setFlipped(
                      open ? flipped.filter((x) => x !== i) : [...flipped, i],
                    )
                  }
                  aria-pressed={open}
                >
                  <span className="card-front">
                    <i>{reason[0]}</i>
                    <b>♡</b>
                    <strong>{reason[1]}</strong>
                    <small>TOCA PARA DESCUBRIR</small>
                  </span>
                  <span className="card-back">
                    <b>♥</b>
                    <strong>{reason[1]}</strong>
                    <p>{reason[2]}</p>
                    <small>TOCA PARA VOLVER</small>
                  </span>
                </Button>
              </motion.div>
            )
          })}
        </div>
      </section>

      <section className="finale">
        {surprise && <HeartRain count={38} />}
        <motion.div {...reveal}>
          <div className="ornament">— ♡ —</div>
          <span>BEFORE YOU GO</span>
          <h2>
            One Last Thing,
            <br />
            <em>My Love...</em>
          </h2>
          <p>Hay algo que quiero que nunca olvides.</p>
          {!surprise ? (
            <Button
              className="surprise-button"
              onClick={() => setSurprise(true)}
            >
              Una última sorpresa <span>❤️</span>
            </Button>
          ) : (
            <motion.blockquote
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              En esta vida y en todas las que existan, te volvería a elegir a
              ti.
              <br />
              <strong>Te amo infinitamente. ❤️</strong>
            </motion.blockquote>
          )}
        </motion.div>
      </section>
      <footer>MADE WITH LOVE · FOR MY FAVORITE PERSON · ♡</footer>
    </motion.main>
  )
}

export default function App() {
  const [opened, setOpened] = useState(false)

  return (
    <div className="app">
      <FloatingHearts />
      <AnimatePresence mode="wait">
        {opened ? (
          <Letter key="letter" />
        ) : (
          <Intro key="intro" onOpen={() => setOpened(true)} />
        )}
      </AnimatePresence>
    </div>
  )
}
