"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Mic, BookOpen, Users, Sparkles, Target, Heart, TrendingUp, ShoppingCart } from "lucide-react"
import { motion, Variants } from "framer-motion"
import Image from "next/image"

const fadeInUp : Variants = {
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

const fadeIn : Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
}

const staggerContainer : Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const scaleIn : Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden bg-[oklch(0.25_0.05_250)]">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div className="space-y-8" initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.div className="space-y-4" variants={fadeInUp}>
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-balance">
                  Tu palabra tiene poder
                </h1>
                <p className="text-xl md:text-2xl text-white/80 font-light text-balance">
                  Convierte tu voz en tu mayor herramienta de éxito
                </p>
              </motion.div>
              <motion.p className="text-lg md:text-xl text-white/70 leading-relaxed" variants={fadeInUp}>
                Domina el miedo escénico, conquista los escenarios y comunica con autenticidad.
              </motion.p>
              <motion.div className="flex flex-col sm:flex-row gap-4" variants={fadeInUp}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="text-base px-8 py-6 bg-[oklch(0.65_0.12_70)] hover:bg-[oklch(0.60_0.12_70)] text-white w-full sm:w-auto rounded-full font-semibold shadow-lg"
                  >
                    COMPRAR AHORA
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-base px-8 py-6 border-2 border-white text-white hover:bg-white/10 bg-transparent w-full sm:w-auto rounded-full font-semibold"
                  >
                    LO QUIERO
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div
                className="aspect-[3/4] relative rounded-lg overflow-hidden"
                style={{
                  transform: "perspective(1200px) rotateY(-8deg)",
                  boxShadow: `
                    0 0 40px rgba(157, 124, 74, 0.6),
                    0 20px 60px -15px rgba(157, 124, 74, 0.5),
                    0 10px 30px -10px rgba(0, 0, 0, 0.4),
                    -20px 0 40px rgba(157, 124, 74, 0.3)
                  `,
                }}
              >
                <Image
                  src="/elegant-book-cover-with-microphone-and-stage-light.jpg"
                  alt="Tu palabra tiene poder - Libro de Nicole Coimbra Soria"
                  fill
                  sizes="100vw"
                  priority  // Añade esto
                  className="object-cover"
                />
              </div>
              <motion.div
                className="absolute -bottom-10 -right-10 w-40 h-40 bg-[oklch(0.65_0.12_70)] rounded-full blur-3xl opacity-40"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[oklch(0.96_0.01_75)]">
        <motion.div
          className="container mx-auto max-w-4xl text-center space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            className="font-serif text-4xl md:text-5xl font-bold text-[oklch(0.52_0.09_65)] text-balance"
            variants={fadeInUp}
          >
            El 77% de las personas teme hablar en público
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-[oklch(0.4_0.02_50)] leading-relaxed text-pretty"
            variants={fadeInUp}
          >
            Ese nudo en el estómago. Las manos sudorosas. La voz que tiembla. La miedo a ser juzgado.
          </motion.p>
          <motion.p
            className="text-lg md:text-xl text-[oklch(0.3_0.02_50)] font-medium text-pretty"
            variants={fadeInUp}
          >
            No estás solo. Y lo mejor: puedes transformar el miedo en poder.
          </motion.p>
        </motion.div>
      </section>

      <section className="py-20 px-4 bg-[oklch(0.70_0.12_75)]">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16 space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[oklch(0.3_0.05_60)] text-balance">
              Lo que descubrirás en este libro
            </h2>
            <p className="text-lg text-[oklch(0.35_0.04_60)] text-pretty">
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
                icon: <Sparkles className="w-7 h-7" />,
                iconColor: "bg-pink-500",
                title: "Neurociencia del miedo escénico",
                description: "Entiende cómo funciona tu cerebro y aprende a controlar tus emociones",
              },
              {
                icon: <Users className="w-7 h-7" />,
                iconColor: "bg-[oklch(0.65_0.12_70)]",
                title: "Lenguaje corporal y voz",
                description: "Proyecta seguridad y carisma con cada gesto y palabra",
              },
              {
                icon: <BookOpen className="w-7 h-7" />,
                iconColor: "bg-[oklch(0.65_0.12_70)]",
                title: "Técnicas de lectura y escritura",
                description: "Estructura mensajes que cautiven y persuadan a tu audiencia",
              },
              {
                icon: <Target className="w-7 h-7" />,
                iconColor: "bg-blue-500",
                title: "Construcción de marca personal",
                description: "Desarrolla tu voz única y auténtica que te diferencie",
              },
              {
                icon: <TrendingUp className="w-7 h-7" />,
                iconColor: "bg-[oklch(0.65_0.12_70)]",
                title: "Ejercicios prácticos",
                description: "Herramientas reales que puedes aplicar desde el primer día",
              },
              {
                icon: <Heart className="w-7 h-7" />,
                iconColor: "bg-pink-500",
                title: "Comunicación auténtica",
                description: "Conecta emocionalmente y genera impacto duradero",
              },
            ].map((benefit, index) => (
              <motion.div key={index} variants={scaleIn}>
                <motion.div whileHover={{ y: -6, transition: { duration: 0.3 } }}>
                  <Card className="p-6 space-y-4 hover:shadow-xl transition-all bg-white border-0 h-full rounded-2xl">
                    <div
                      className={`w-12 h-12 rounded-full ${benefit.iconColor} flex items-center justify-center text-white`}
                    >
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-bold text-[oklch(0.25_0.02_50)]">{benefit.title}</h3>
                    <p className="text-[oklch(0.4_0.02_50)] leading-relaxed text-sm">{benefit.description}</p>
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
                className="text-base px-8 py-6 bg-[oklch(0.4_0.06_60)] hover:bg-[oklch(0.35_0.06_60)] text-white rounded-full font-semibold shadow-lg"
              >
                DESEO MI LIBRO YA
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[oklch(0.25_0.05_250)]">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            className="text-center mb-12 space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white text-balance">
              Con este libro lograrás...
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-6 mb-12"
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
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[oklch(0.65_0.12_70)] flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-lg leading-relaxed text-white">{result}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.blockquote
            className="text-center text-xl md:text-2xl font-light italic border border-white/30 py-8 px-6 text-pretty text-white rounded-2xl"
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

      <section className="py-20 px-4 bg-[oklch(0.96_0.01_75)]">
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
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-48 h-48 bg-blue-400 rounded-full opacity-60 blur-2xl" />
                <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-[oklch(0.65_0.12_70)] rounded-full opacity-60 blur-2xl" />
                <div className="aspect-square relative rounded-full overflow-hidden shadow-2xl z-10">
                  <Image
                    src="/professional-woman-speaker-with-microphone-confide.jpg"
                    alt="Nicole Coimbra Soria"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover w-full h-full"
                  />
                </div>
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
                className="font-serif text-4xl md:text-5xl font-bold text-[oklch(0.52_0.09_65)] text-balance"
                variants={fadeInUp}
              >
                Sobre la autora
              </motion.h2>
              <motion.h3 className="text-2xl font-semibold text-[oklch(0.52_0.09_65)]" variants={fadeInUp}>
                Nicole Coimbra Soria
              </motion.h3>
              <motion.div className="space-y-4 text-base text-[oklch(0.4_0.02_50)] leading-relaxed" variants={fadeInUp}>
                <p>
                  Especialista en comunicación, oratoria y marca personal con años de experiencia transformando vidas en
                  Bolivia y toda Latinoamérica.
                </p>
                <p>
                  Nicole ha ayudado a cientos de profesionales, emprendedores y líderes a encontrar su voz auténtica y
                  comunicar con impacto.
                </p>
                <p className="text-[oklch(0.3_0.02_50)] font-medium">
                  Su enfoque combina neurociencia, técnicas prácticas y empatía para crear transformaciones reales y
                  duraderas.
                </p>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="text-base px-8 py-6 bg-[oklch(0.65_0.12_70)] hover:bg-[oklch(0.60_0.12_70)] text-white rounded-full font-semibold shadow-lg"
                  >
                    CONOCE MÁS SOBRE ELLA
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[oklch(0.96_0.01_75)]">
        <motion.div
          className="container mx-auto max-w-4xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scaleIn}
          transition={{ duration: 1 }}
        >
          <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[oklch(0.52_0.09_65)] leading-tight text-balance">
            "Cuando aprendes a dominar tu palabra, nada ni nadie puede silenciar tu poder."
          </blockquote>
        </motion.div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-[oklch(0.45_0.15_310)] to-[oklch(0.35_0.18_320)] relative overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 text-white/20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <Sparkles className="w-16 h-16" />
        </motion.div>
        <motion.div
          className="absolute bottom-32 right-32 text-white/20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <Sparkles className="w-24 h-24" />
        </motion.div>

        <motion.div
          className="container mx-auto max-w-4xl text-center space-y-8 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-balance text-white"
            variants={fadeInUp}
          >
            El momento de hablar con seguridad no es mañana. Es hoy.
          </motion.h2>
          <motion.p className="text-xl md:text-2xl font-light text-pretty text-white/90" variants={fadeInUp}>
            Tu voz merece ser escuchada. Da el primer paso hacia tu mejor versión.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="text-base px-10 py-7 bg-[oklch(0.75_0.15_200)] hover:bg-[oklch(0.70_0.15_200)] text-white shadow-2xl rounded-full font-bold"
              >
                COMPRAR "TU PALABRA TIENE PODER"
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

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
            y: [0, -8, 0],
          }}
          transition={{
            y: {
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
          }}
        >
          <Button
            size="lg"
            className="shadow-2xl bg-[oklch(0.65_0.12_70)] hover:bg-[oklch(0.60_0.12_70)] text-white px-6 py-6 rounded-full font-semibold"
          >
            <ShoppingCart className="w-5 h-5" />
            Comprar ahora
          </Button>
        </motion.div>
      </motion.div>
    </main>
  )
}
