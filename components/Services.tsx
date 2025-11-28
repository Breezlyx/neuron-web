import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Beaker, FlaskConical, Dna} from "lucide-react" //Importar iconos necesarios

const experiments = [ // Datos de los experimentos
  {
    id: 1,
    title: "Slime Galáctico",
    description: "Crea tu propia masa viscosa, brillante y de otro planeta. ¡El favorito de todos!",
    badge: "Más Popular",
    badgeColor: "bg-pink-500 hover:bg-pink-600 text-white",
    icon: Beaker,
    iconColor: "text-pink-500 group-hover:text-pink-600",
    borderColor: "group-hover:border-pink-200",
    bgIcon: "bg-pink-50 group-hover:bg-pink-100",
    image: "/images/services/galactic-slime.jpg",
  },
  {
    id: 2,
    title: "Pasta de Dientes de Elefante",
    description: "Una reacción química gigante y espumosa que sale disparada hacia el cielo.",
    badge: "Asombroso",
    badgeColor: "bg-yellow-500 hover:bg-yellow-600 text-white",
    icon: FlaskConical,
    iconColor: "text-yellow-500 group-hover:text-yellow-600",
    borderColor: "group-hover:border-yellow-200",
    bgIcon: "bg-yellow-50 group-hover:bg-yellow-100",
    image: "/images/services/elephant-toothpaste.jpg",
  },
  {
    id: 3,
    title: "Extracción de ADN",
    description: "Conviértete en un científico real aislando el código de la vida de las frutas.",
    badge: "Educativo",
    badgeColor: "bg-cyan-500 hover:bg-cyan-600 text-white",
    icon: Dna,
    iconColor: "text-cyan-500 group-hover:text-cyan-600",
    borderColor: "group-hover:border-cyan-200",
    bgIcon: "bg-cyan-50 group-hover:bg-cyan-100",
    image: "/images/services/dna-extraction.jpg",
  },
]

export function ServicesSection() { // Componente de la sección de servicios
  return (
    <section id="servicios" className="py-20 px-4 bg-pink-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">Nuestros <span className="text-pink-500">Experimentos</span></h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
            Diversión explosiva y educativa
          </p>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiments.map((experiment) => {
            const Icon = experiment.icon
            return (
              <Card
                key={experiment.id}
                className="group overflow-hidden border-2 border-gray-100 hover:border-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-xl bg-white"
              >
                {/* Image Container with Icon Overlay */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  <img
                    src={experiment.image || "/placeholder.svg"}
                    alt={experiment.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                  {/* Icon Overlay */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg">
                    <Icon className={`w-6 h-6 ${experiment.iconColor}`} />
                  </div>

                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className={`${experiment.badgeColor} text-white border-0 shadow-lg px-3 py-1 font-semibold`}>
                      {experiment.badge}
                    </Badge>
                  </div>
                </div>

                {/* Card Content */}
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                    {experiment.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600 leading-relaxed">
                    {experiment.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}