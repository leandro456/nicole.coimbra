"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Mic, BookOpen, Users, Sparkles, Target, Heart, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
}

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div className="space-y-8" initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.div className="space-y-4" variants={fadeInUp}>
                <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary leading-tight text-balance">
                  Tu palabra tiene poder
                </h1>
                <p className="text-2xl md:text-3xl text-foreground/80 font-light text-balance">
                  Convierte tu voz en tu mayor herramienta de éxito
                </p>
              </motion.div>
              <motion.p className="text-lg md:text-xl text-muted-foreground leading-relaxed" variants={fadeInUp}>
                Domina el miedo escénico, conquista los escenarios y comunica con autenticidad.
              </motion.p>
              <motion.div className="flex flex-col sm:flex-row gap-4" variants={fadeInUp}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto rounded-full"
                  >
                    COMPRAR AHORA
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/10 bg-transparent w-full sm:w-auto rounded-full"
                  >
                    Conocer más
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <div className="aspect-[3/4] relative rounded-lg overflow-hidden shadow-[0_20px_60px_-15px_rgba(157,124,74,0.4),0_10px_30px_-10px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_70px_-15px_rgba(157,124,74,0.5),0_15px_40px_-10px_rgba(0,0,0,0.4)] transition-shadow duration-500">
                <img
                  src="/elegant-book-cover-with-microphone-and-stage-light.jpg"
                  alt="Tu palabra tiene poder - Libro de Nicole Coimbra Soria"
                  className="object-cover w-full h-full"
                />
              </div>
              <motion.div
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full blur-3xl opacity-50"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem + Emotional Connection */}
      <section className="py-20 px-4 bg-card">
        <motion.div
          className="container mx-auto max-w-4xl text-center space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            className="font-serif text-4xl md:text-5xl font-bold text-primary text-balance"
            variants={fadeInUp}
          >
            El 77% de las personas teme hablar en público
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty"
            variants={fadeInUp}
          >
            Ese nudo en el estómago. Las manos sudorosas. La voz que tiembla. La miedo a ser juzgado.
          </motion.p>
          <motion.p className="text-xl md:text-2xl text-foreground font-medium text-pretty" variants={fadeInUp}>
            No estás solo. Y lo mejor: puedes transformar el miedo en poder.
          </motion.p>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16 space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary text-balance">
              Lo que descubrirás en este libro
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Herramientas prácticas y científicas para dominar el arte de hablar en público
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Neurociencia del miedo escénico",
                description: "Entiende cómo funciona tu cerebro y aprende a controlar tus emociones",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Lenguaje corporal y voz",
                description: "Proyecta seguridad y carisma con cada gesto y palabra",
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Técnicas de lectura y escritura",
                description: "Estructura mensajes que cautiven y persuadan a tu audiencia",
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Construcción de marca personal",
                description: "Desarrolla tu voz única y auténtica que te diferencie",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Ejercicios prácticos",
                description: "Herramientas reales que puedes aplicar desde el primer día",
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Comunicación auténtica",
                description: "Conecta emocionalmente y genera impacto duradero",
              },
            ].map((benefit, index) => (
              <motion.div key={index} variants={scaleIn}>
                <motion.div whileHover={{ y: -8, transition: { duration: 0.4, ease: "easeOut" } }}>
                  <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow bg-card border-border h-full">
                    <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full"
              >
                QUIERO MI LIBRO YA
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            className="text-center mb-12 space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-balance">Con este libro lograrás...</h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              "Hablar sin miedo frente a cualquier audiencia",
              "Proyectar seguridad y profesionalismo",
              "Conectar emocionalmente con tu público",
              "Vender tus ideas con autenticidad y poder",
            ].map((result, index) => (
              <motion.div key={index} className="flex items-start gap-4" variants={fadeInUp}>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                  <Check className="w-5 h-5 text-accent-foreground" />
                </div>
                <p className="text-xl leading-relaxed">{result}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.blockquote
            className="text-center text-2xl md:text-3xl font-light italic border-t border-b border-primary-foreground/20 py-8 text-pretty"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
          >
            "Tu palabra tiene poder no solo te enseña a hablar, sino a inspirar, persuadir y transformar."
          </motion.blockquote>
        </div>
      </section>

      {/* About the Author */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={scaleIn}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-square relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/professional-woman-speaker-with-microphone-confide.jpg"
                  alt="Nicole Coimbra Soria"
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2
                className="font-serif text-4xl md:text-5xl font-bold text-primary text-balance"
                variants={fadeInUp}
              >
                Sobre la autora
              </motion.h2>
              <motion.h3 className="text-2xl font-semibold text-accent" variants={fadeInUp}>
                Nicole Coimbra Soria
              </motion.h3>
              <motion.div className="space-y-4 text-lg text-muted-foreground leading-relaxed" variants={fadeInUp}>
                <p>
                  Especialista en comunicación, oratoria y marca personal con años de experiencia transformando vidas en
                  Bolivia y toda Latinoamérica.
                </p>
                <p>
                  Nicole ha ayudado a cientos de profesionales, emprendedores y líderes a encontrar su voz auténtica y
                  comunicar con impacto.
                </p>
                <p className="text-foreground font-medium">
                  Su enfoque combina neurociencia, técnicas prácticas y empatía para crear transformaciones reales y
                  duraderas.
                </p>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
                  >
                    ADQUIRIR EJEMPLAR
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Inspirational Quote */}
      <section className="py-20 px-4 bg-accent/10">
        <motion.div
          className="container mx-auto max-w-4xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scaleIn}
          transition={{ duration: 1 }}
        >
          <blockquote className="font-serif text-3xl md:text-5xl font-bold text-primary leading-tight text-balance">
            "Cuando aprendes a dominar tu palabra, nada ni nadie puede silenciar tu poder."
          </blockquote>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <motion.div
          className="container mx-auto max-w-4xl text-center space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 className="font-serif text-4xl md:text-6xl font-bold text-balance" variants={fadeInUp}>
            El momento de hablar con seguridad no es mañana. Es hoy.
          </motion.h2>
          <motion.p className="text-2xl md:text-3xl font-light text-pretty" variants={fadeInUp}>
            Tu voz merece ser escuchada. Da el primer paso hacia tu mejor versión.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="text-xl px-12 py-8 bg-accent hover:bg-accent/90 text-accent-foreground shadow-2xl rounded-full"
              >
                COMPRAR "TU PALABRA TIENE PODER"
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Floating CTA Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50 hidden md:block"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            y: {
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
          }}
        >
          <Button
            size="lg"
            className="shadow-2xl bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-6 rounded-full"
          >
            <Mic className="w-5 h-5 mr-2" />
            Comprar ahora
          </Button>
        </motion.div>
      </motion.div>
    </main>
  )
}
