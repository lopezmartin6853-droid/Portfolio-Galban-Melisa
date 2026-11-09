import { CaseStudyProject, TimelineMilestone } from '../types';

export const projectsData: CaseStudyProject[] = [
  {
    id: 'huerta-inteligente',
    letter: 'A',
    title: 'Huerta inteligente',
    summary: 'Sistema de riego automatizado que mide la humedad del suelo y ayuda a cuidar una huerta escolar.',
    technologies: ['Arduino', 'Sensor de humedad', 'Programación por bloques'],
    level: '[Nivel / edad]',
    urlPlaceholder: '[PEGAR_URL_DEL_PROYECTO]',
    image: '/src/assets/images/case_study_smart_greenhouse_1794247713815.jpg',
    imageAlt: 'Prototipo de huerta inteligente con sensor capacitivo, Arduino UNO y pantalla LCD en bancal de madera',
    caption: 'Prototipo funcional calibrado con bomba sumergible de 5V y pantalla de telemetría de suelo.',
    desafio: '¿Cómo podemos asegurar que las plantas de la huerta escolar reciban la cantidad exacta de agua sin desperdiciar recursos ni depender del riego manual en recesos?',
    actividad: 'Los estudiantes construyeron un circuito con placa Arduino y sensor de humedad capacitivo, programaron los umbrales de activación mediante bloques y ensamblaron una microbomba sumergible en un cajón de cultivo.',
    aprendizaje: 'Comprensión de variables analógicas vs. digitales, calibración experimental de sensores según el tipo de tierra y nociones de sustentabilidad aplicada.',
    hardware: ['Arduino UNO', 'Sensor capacitivo de humedad', 'Relé 5V y mini bomba', 'Display LCD 16x2 I2C']
  },
  {
    id: 'robot-explorador',
    letter: 'B',
    title: 'Robot explorador',
    summary: 'Robot móvil diseñado para recorrer circuitos, evitar obstáculos y resolver desafíos de navegación.',
    technologies: ['micro:bit / Arduino', 'Ultrasonido', 'Motores'],
    level: '[Nivel / edad]',
    urlPlaceholder: '[PEGAR_URL_DEL_PROYECTO]',
    image: '/src/assets/images/case_study_explorer_rover_1794247714771.jpg',
    imageAlt: 'Robot explorador de dos ruedas con sensor ultrasónico sobre pista de pruebas de papel kraft',
    caption: 'Ensayos de trayectoria en pista dibujada a escala por los propios estudiantes del taller.',
    desafio: 'Diseñar un vehículo autónomo capaz de explorar un entorno desconocido sin colisionar con paredes ni obstáculos móviles.',
    actividad: 'Montaje de chasis 2WD con servomotores de rotación continua, cableado del sensor ultrasónico HC-SR04 y codificación del bucle de decisión para girar en el sentido con mayor distancia libre.',
    aprendizaje: 'Lógica condicional anidada (if-else), cálculo de distancias por tiempo de eco acústico, y resolución empírica de fallas mecánicas en tracción.',
    hardware: ['micro:bit / Arduino', 'Sensor ultrasónico HC-SR04', 'Shield puente H L298N', 'Chasis cortado en madera']
  },
  {
    id: 'semaforo-inclusivo',
    letter: 'C',
    title: 'Semáforo inclusivo',
    summary: 'Prototipo de semáforo con señales visuales y sonoras pensado para reflexionar sobre accesibilidad y seguridad vial.',
    technologies: ['LEDs', 'Zumbador', 'Programación'],
    level: '[Nivel / edad]',
    urlPlaceholder: '[PEGAR_URL_DEL_PROYECTO]',
    image: '/src/assets/images/case_study_inclusive_signal_1794247714991.jpg',
    imageAlt: 'Semáforo peatonal inclusivo de madera con matriz LED y botón táctil probado por estudiantes',
    caption: 'Dispositivo interactivo con frecuencias de pitido diferenciadas para cruce seguro y espera.',
    desafio: '¿De qué manera la tecnología puede hacer que las esquinas y cruces peatonales sean más seguros para personas con ceguera o baja visión?',
    actividad: 'Investigación sobre normas de accesibilidad urbana, ensamblado de matriz de LEDs indicadores de cruce, integración de zumbador con modulación por ancho de pulsos (PWM) y pulsador táctil accesible.',
    aprendizaje: 'Diseño universal y empatía en la ingeniería, control temporal no bloqueante con millis() y cálculo de resistencias limitadoras.',
    hardware: ['Matriz LED bicromática', 'Buzzer pasivo', 'Pulsador industrial 24mm', 'Estructura en MDF encastrable']
  },
  {
    id: 'alarma-ambiental',
    letter: 'D',
    title: 'Alarma ambiental',
    summary: 'Dispositivo que registra variables del aula, como temperatura, luz o calidad del aire, y muestra alertas.',
    technologies: ['Sensores', 'Placa programable', 'Visualización de datos'],
    level: '[Nivel / edad]',
    urlPlaceholder: '[PEGAR_URL_DEL_PROYECTO]',
    imageAlt: 'Estación de monitoreo ambiental escolar con sensor DHT22 y semáforo de calidad de aire',
    caption: 'Monitoreo ambiental continuo en el aula para evaluar ventilación cruzada y confort lumínico.',
    desafio: 'Medir en tiempo real si las condiciones de ventilación, temperatura y luz del aula favorecen la concentración y el bienestar del grupo.',
    actividad: 'Conexión de sensores de temperatura, humedad y luz ambiente a una placa programable, con calibración de umbrales semafóricos que avisan cuándo abrir ventanas o regular la iluminación.',
    aprendizaje: 'Muestreo estadístico, interpretación de gráficos de dispersión temporal y toma de acuerdos colectivos basados en evidencia empírica.',
    hardware: ['Sensor DHT22', 'Fotorresistencia LDR', 'Anillo LED RGB Neopixel', 'Gabinete ventilado']
  },
  {
    id: 'ciudad-sustentable',
    letter: 'E',
    title: 'Ciudad sustentable',
    summary: 'Maqueta interactiva de una ciudad con iluminación automatizada, energías renovables y movilidad inteligente.',
    technologies: ['Electrónica', 'Diseño 3D', 'Prototipado'],
    level: '[Nivel / edad]',
    urlPlaceholder: '[PEGAR_URL_DEL_PROYECTO]',
    imageAlt: 'Maqueta urbana colaborativa con postes solares y barreras motorizadas con piezas impresas en 3D',
    caption: 'Integración interdisciplinaria entre diseño arquitectónico a escala y automatización distribuida.',
    desafio: 'Representar cómo una ciudad puede optimizar el consumo de energía eléctrica y coordinar el flujo peatonal mediante sistemas conectados.',
    actividad: 'Cada equipo diseñó e imprimió en 3D un sector urbano (luminarias fotovoltaicas, barrera de tren inteligente y molino eólico), integrando microcontroladores en una red coordinada.',
    aprendizaje: 'Modelado paramétrico en 3D, tolerancia en encastres físicos, trabajo en equipo interdisciplinario y simulación de redes de infraestructura.',
    hardware: ['Piezas impresas en 3D PLA', 'Mini panel fotovoltaico', 'Servomotores SG90', 'Iluminación LED sectorizada']
  },
  {
    id: 'juego-programable',
    letter: 'F',
    title: 'Juego programable',
    summary: 'Videojuego o desafío interactivo creado para aprender lógica, secuencias y resolución de problemas.',
    technologies: ['Scratch / MakeCode', 'Diseño de interfaces'],
    level: '[Nivel / edad]',
    urlPlaceholder: '[PEGAR_URL_DEL_PROYECTO]',
    imageAlt: 'Interfaz de videojuego educativo con personajes diseñados por estudiantes y control tangible',
    caption: 'Desarrollo de lógica interactiva y vinculación con mandos físicos artesanales de cartón conductivo.',
    desafio: 'Crear una experiencia lúdica donde las mecánicas del juego enseñen un concepto curricular y puedan ser controladas con un mando construido por ellos mismos.',
    actividad: 'Diseño de storyboard, programación de colisiones, variables de puntaje y bucles de juego en entornos de bloques, vinculados a pulsadores de grafito y plastilina conductora.',
    aprendizaje: 'Pensamiento algorítmico, modularización de funciones, animación de sprites y testeo iterativo con usuarios reales (compañeros de otros cursos).',
    hardware: ['Entorno Scratch / MakeCode', 'Placa de interfaz Makey Makey', 'Materiales conductores reciclados']
  }
];

export const teacherTimeline: TimelineMilestone[] = [
  {
    period: 'Actualidad',
    role: 'Docencia en Robótica y Pensamiento Computacional',
    focus: 'Acompañamiento a escuelas e instituciones',
    description: 'Diseño e implementación de talleres curriculares y extracurriculares basados en proyectos reales, donde la tecnología se aborda como lenguaje de creación y no de consumo pasivo.'
  },
  {
    period: 'Formación continua',
    role: 'Especialización en Educación STEAM',
    focus: 'Metodologías activas y cultura Maker',
    description: 'Capacitación constante en herramientas de prototipado tangible (Arduino, micro:bit, modelado 3D), pedagogías de aprendizaje basado en proyectos (ABP) y diseño universal para el aprendizaje.'
  },
  {
    period: 'Recorrido en aula',
    role: 'Coordinación de proyectos y ferias escolares',
    focus: 'Espacios de exploración e indagación',
    description: 'Acompañamiento a grupos escolares en la conceptualización de prototipos comunitarios, resolución colectiva de problemas y presentación abierta a familias e instituciones.'
  }
];
