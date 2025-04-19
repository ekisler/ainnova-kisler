"use client";

// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState, useEffect } from "react";
import {
  Layout,
  Button,
  Form,
  Input,
  Select,
  Card,
  Modal,
  message,
} from "antd";
import 'swiper/css';

import {
  RocketOutlined,
  ApiOutlined,
  RobotOutlined,
  CodeOutlined,
  TeamOutlined,
  CustomerServiceOutlined,
  ArrowRightOutlined,
  CheckOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import * as echarts from "echarts";

const { Header, Content, Footer } = Layout;
const { TextArea } = Input;
const { Option } = Select;

const App: React.FC = () => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [activeFilter, setActiveFilter] = useState("todos");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const chartDom = document.getElementById("metrics-chart");
    if (chartDom) {
      const myChart = echarts.init(chartDom);
      const option = {
        animation: false,
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          data: ["Tiempo Ahorrado (horas)", "Eficiencia (%)"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: ["Antes", "Después"],
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "Horas",
            min: 0,
            max: 100,
            position: "left",
          },
          {
            type: "value",
            name: "Porcentaje",
            min: 0,
            max: 100,
            position: "right",
          },
        ],
        series: [
          {
            name: "Tiempo Ahorrado (horas)",
            type: "bar",
            data: [80, 20],
          },
          {
            name: "Eficiencia (%)",
            type: "line",
            yAxisIndex: 1,
            data: [40, 95],
          },
        ],
      };
      myChart.setOption(option);

      window.addEventListener("resize", () => {
        myChart.resize();
      });

      return () => {
        window.removeEventListener("resize", () => {
          myChart.resize();
        });
        myChart.dispose();
      };
    }
  }, []);

  const handleSubmit = (values: any) => {
    setIsSubmitting(true);
    // Simulación de envío de formulario
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      form.resetFields();
      message.success("¡Mensaje enviado con éxito!");
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };

  const showProjectModal = (project: any) => {
    setSelectedProject(project);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const services = [
    {
      icon: <RocketOutlined className="text-4xl text-blue-600" />,
      title: "Automatización de Procesos",
      description:
        "Optimizamos tus flujos de trabajo con soluciones automatizadas que ahorran tiempo y recursos.",
    },
    {
      icon: <RobotOutlined className="text-4xl text-purple-600" />,
      title: "Inteligencia Artificial",
      description:
        "Implementamos soluciones de IA personalizadas para potenciar la toma de decisiones en tu negocio.",
    },
    {
      icon: <ApiOutlined className="text-4xl text-green-600" />,
      title: "Integración de Sistemas",
      description:
        "Conectamos tus aplicaciones y plataformas para crear un ecosistema digital cohesivo y eficiente.",
    },
    {
      icon: <CodeOutlined className="text-4xl text-red-600" />,
      title: "Desarrollo a Medida",
      description:
        "Creamos soluciones tecnológicas adaptadas a las necesidades específicas de tu empresa.",
    },
    {
      icon: <TeamOutlined className="text-4xl text-yellow-600" />,
      title: "Consultoría Estratégica",
      description:
        "Asesoramiento experto para la transformación digital y optimización de procesos empresariales.",
    },
    {
      icon: <CustomerServiceOutlined className="text-4xl text-indigo-600" />,
      title: "Soporte Continuo",
      description:
        "Asistencia técnica permanente para garantizar el funcionamiento óptimo de tus soluciones.",
    },
  ];

  const useCases = [
    {
      title: "Automatización de Ventas",
      description:
        "Implementamos un flujo automatizado que integra CRM, email marketing y seguimiento de leads, reduciendo el tiempo de gestión en un 75%.",
      image:
        "https://readdy.ai/api/search-image?query=Professional%20diagram%20showing%20automated%20sales%20workflow%20with%20nodes%20and%20connections%2C%20clean%20minimalist%20design%2C%20blue%20and%20white%20color%20scheme%2C%20business%20process%20automation%20visualization%2C%20high%20quality%20digital%20illustration&width=600&height=400&seq=1&orientation=landscape",
    },
    {
      title: "Procesamiento de Datos",
      description:
        "Desarrollamos un sistema que extrae, transforma y carga datos automáticamente desde múltiples fuentes, eliminando la necesidad de procesamiento manual.",
      image:
        "https://readdy.ai/api/search-image?query=Data%20processing%20visualization%20with%20flowing%20data%20streams%2C%20digital%20transformation%20concept%2C%20minimalist%20tech%20illustration%2C%20nodes%20processing%20information%20automatically%2C%20blue%20gradient%20background%2C%20professional%20business%20graphic&width=600&height=400&seq=2&orientation=landscape",
    },
    {
      title: "Procesamiento de Datos",
      description:
        "Desarrollamos un sistema que extrae, transforma y carga datos automáticamente desde múltiples fuentes, eliminando la necesidad de procesamiento manual.",
      image:
        "https://readdy.ai/api/search-image?query=Data%20processing%20visualization%20with%20flowing%20data%20streams%2C%20digital%20transformation%20concept%2C%20minimalist%20tech%20illustration%2C%20nodes%20processing%20information%20automatically%2C%20blue%20gradient%20background%2C%20professional%20business%20graphic&width=600&height=400&seq=2&orientation=landscape",
    },
    {
      title: "Procesamiento de Datos",
      description:
        "Desarrollamos un sistema que extrae, transforma y carga datos automáticamente desde múltiples fuentes, eliminando la necesidad de procesamiento manual.",
      image:
        "https://readdy.ai/api/search-image?query=Data%20processing%20visualization%20with%20flowing%20data%20streams%2C%20digital%20transformation%20concept%2C%20minimalist%20tech%20illustration%2C%20nodes%20processing%20information%20automatically%2C%20blue%20gradient%20background%2C%20professional%20business%20graphic&width=600&height=400&seq=2&orientation=landscape",
    },
    {
      title: "Procesamiento de Datos",
      description:
        "Desarrollamos un sistema que extrae, transforma y carga datos automáticamente desde múltiples fuentes, eliminando la necesidad de procesamiento manual.",
      image:
        "https://readdy.ai/api/search-image?query=Data%20processing%20visualization%20with%20flowing%20data%20streams%2C%20digital%20transformation%20concept%2C%20minimalist%20tech%20illustration%2C%20nodes%20processing%20information%20automatically%2C%20blue%20gradient%20background%2C%20professional%20business%20graphic&width=600&height=400&seq=2&orientation=landscape",
    },
    {
      title: "Monitoreo Inteligente",
      description:
        "Creamos un sistema de alertas en tiempo real que notifica incidencias y anomalías, permitiendo respuestas proactivas antes de que afecten al negocio.",
      image:
        "https://readdy.ai/api/search-image?query=Real-time%20monitoring%20dashboard%20with%20alerts%20and%20notifications%2C%20digital%20screens%20showing%20metrics%20and%20KPIs%2C%20modern%20tech%20interface%2C%20professional%20business%20intelligence%20visualization%2C%20clean%20design%20with%20blue%20accents&width=600&height=400&seq=3&orientation=landscape",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Sistema de Gestión Automatizada",
      description:
        "Implementación de un sistema integral que automatiza procesos administrativos para una empresa de logística internacional.",
      category: "automatizacion",
      image:
        "https://readdy.ai/api/search-image?query=Modern%20logistics%20management%20system%20interface%20with%20automation%20controls%2C%20professional%20business%20software%20dashboard%2C%20clean%20design%20with%20data%20visualization%2C%20blue%20and%20white%20color%20scheme%2C%20digital%20transformation%20concept&width=500&height=300&seq=4&orientation=landscape",
    },
    {
      id: 2,
      title: "Asistente Virtual con IA",
      description:
        "Desarrollo de un asistente virtual impulsado por IA que optimiza la atención al cliente y reduce tiempos de respuesta.",
      category: "ia",
      image:
        "https://readdy.ai/api/search-image?query=AI%20virtual%20assistant%20interface%20with%20chat%20functionality%2C%20modern%20clean%20design%2C%20professional%20business%20application%2C%20blue%20gradient%20background%2C%20digital%20conversation%20visualization%2C%20customer%20service%20automation%20concept&width=500&height=300&seq=5&orientation=landscape",
    },
    {
      id: 3,
      title: "Integración Multicanal",
      description:
        "Solución que integra diferentes canales de comunicación y plataformas para centralizar la gestión de interacciones con clientes.",
      category: "integracion",
      image:
        "https://readdy.ai/api/search-image?query=Multichannel%20integration%20platform%20showing%20connected%20communication%20channels%2C%20professional%20business%20software%20interface%2C%20clean%20minimalist%20design%2C%20digital%20transformation%20visualization%2C%20blue%20accent%20colors&width=500&height=300&seq=6&orientation=landscape",
    },
    {
      id: 4,
      title: "Dashboard Analítico",
      description:
        "Creación de un panel de control que visualiza métricas clave del negocio en tiempo real para facilitar la toma de decisiones.",
      category: "desarrollo",
      image:
        "https://readdy.ai/api/search-image?query=Professional%20analytics%20dashboard%20with%20real-time%20business%20metrics%2C%20data%20visualization%20with%20charts%20and%20KPIs%2C%20clean%20modern%20interface%20design%2C%20blue%20color%20scheme%2C%20business%20intelligence%20concept&width=500&height=300&seq=7&orientation=landscape",
    },
    {
      id: 5,
      title: "Workflow de Aprobaciones",
      description:
        "Sistema automatizado de flujos de aprobación que agiliza procesos internos y reduce cuellos de botella operativos.",
      category: "automatizacion",
      image:
        "https://readdy.ai/api/search-image?query=Approval%20workflow%20system%20interface%20showing%20process%20steps%20and%20status%2C%20professional%20business%20software%2C%20clean%20minimalist%20design%2C%20digital%20process%20automation%20visualization%2C%20blue%20gradient%20background&width=500&height=300&seq=8&orientation=landscape",
    },
    {
      id: 6,
      title: "Predicción de Demanda",
      description:
        "Modelo predictivo basado en machine learning que anticipa la demanda de productos con alta precisión.",
      category: "ia",
      image:
        "https://readdy.ai/api/search-image?query=Demand%20prediction%20model%20visualization%20with%20forecasting%20graphs%20and%20AI%20analysis%2C%20professional%20business%20intelligence%20interface%2C%20clean%20modern%20design%2C%20blue%20data%20visualization%2C%20machine%20learning%20concept&width=500&height=300&seq=9&orientation=landscape",
    },
  ];

  const filteredProjects =
    activeFilter === "todos"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <Layout className="min-h-screen">
      {/* Header */}
      <Header className="bg-white shadow-sm fixed w-full z-10 px-8 flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-blue-600 flex items-center">
            <RocketOutlined className="mr-2" /> AInnova Kisler
          </div>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a
            href="#inicio"
            className="text-gray-700 hover:text-blue-600 transition duration-300 cursor-pointer"
          >
            Inicio
          </a>
          <a
            href="#servicios"
            className="text-gray-700 hover:text-blue-600 transition duration-300 cursor-pointer"
          >
            Servicios
          </a>
          <a
            href="#casos"
            className="text-gray-700 hover:text-blue-600 transition duration-300 cursor-pointer"
          >
            Casos de Uso
          </a>
          <a
            href="#proyectos"
            className="text-gray-700 hover:text-blue-600 transition duration-300 cursor-pointer"
          >
            Proyectos
          </a>
          <a
            href="#contacto"
            className="text-gray-700 hover:text-blue-600 transition duration-300 cursor-pointer"
          >
            Contacto
          </a>
        </nav>
        <Button
          type="primary"
          className="bg-blue-600 !rounded-button whitespace-nowrap cursor-pointer"
        >
          Solicitar Demo
        </Button>
      </Header>

      <Content className="pt-16">
        {/* Hero Section */}
        <section
          id="inicio"
          className="relative min-h-[calc(100vh-64px)] flex items-center overflow-hidden"
        >
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url('https://res.cloudinary.com/dxfksb8ua/image/upload/v1745031254/images/9eb0b1f7bb074080d9ce73a549f1a6c6_h1dfuj.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="container mx-auto px-8 z-10 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Automatización Inteligente con N8N
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-xl">
                Transformamos tu negocio con soluciones de automatización
                avanzadas y tecnología de inteligencia artificial personalizada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  type="primary"
                  size="large"
                  className="bg-blue-600 flex items-center !rounded-button whitespace-nowrap cursor-pointer"
                  href="#servicios"
                >
                  Explorar Servicios <ArrowRightOutlined className="ml-2" />
                </Button>
                <Button
                  size="large"
                  className="border-white text-white hover:text-blue-600 hover:border-blue-600 !rounded-button whitespace-nowrap cursor-pointer"
                  href="#contacto"
                >
                  Contactar
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicios" className="py-20 bg-gray-50">
          <div className="container mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nuestros Servicios
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Ofrecemos soluciones tecnológicas avanzadas para optimizar tus
                procesos empresariales y potenciar tu crecimiento.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow duration-300 h-full cursor-pointer"
                  hoverable
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section id="casos" className="py-20 bg-white">
          <div className="container mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Casos de Uso con N8N
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Descubre cómo nuestras soluciones de automatización transforman
                procesos empresariales complejos en flujos eficientes.
              </p>
            </div>
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="pb-12"
            >
              {useCases.map((useCase, index) => (
                <SwiperSlide key={index}>
                  <Card
                    className="h-full overflow-hidden"
                    cover={
                      <div className="h-48 overflow-hidden">
                        <img
                          alt={useCase.title}
                          src={useCase.image}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    }
                  >
                    <h3 className="text-xl font-semibold mb-2">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-600">{useCase.description}</p>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-8 text-center">
                Resultados Medibles
              </h3>
              <div id="metrics-chart" className="w-full h-80"></div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="proyectos" className="py-20 bg-gray-50">
          <div className="container mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nuestros Proyectos
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explora algunos de nuestros casos de éxito implementando
                soluciones de automatización e inteligencia artificial.
              </p>
            </div>

            <div className="flex justify-center mb-8">
              <div className="flex flex-wrap gap-2 justify-center">
                <Button
                  className={`!rounded-button whitespace-nowrap cursor-pointer ${activeFilter === "todos" ? "bg-blue-600 text-white" : ""}`}
                  onClick={() => setActiveFilter("todos")}
                >
                  Todos
                </Button>
                <Button
                  className={`!rounded-button whitespace-nowrap cursor-pointer ${activeFilter === "automatizacion" ? "bg-blue-600 text-white" : ""}`}
                  onClick={() => setActiveFilter("automatizacion")}
                >
                  Automatización
                </Button>
                <Button
                  className={`!rounded-button whitespace-nowrap cursor-pointer ${activeFilter === "ia" ? "bg-blue-600 text-white" : ""}`}
                  onClick={() => setActiveFilter("ia")}
                >
                  Inteligencia Artificial
                </Button>
                <Button
                  className={`!rounded-button whitespace-nowrap cursor-pointer ${activeFilter === "integracion" ? "bg-blue-600 text-white" : ""}`}
                  onClick={() => setActiveFilter("integracion")}
                >
                  Integración
                </Button>
                <Button
                  className={`!rounded-button whitespace-nowrap cursor-pointer ${activeFilter === "desarrollo" ? "bg-blue-600 text-white" : ""}`}
                  onClick={() => setActiveFilter("desarrollo")}
                >
                  Desarrollo
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer"
                  onClick={() => showProjectModal(project)}
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-200 text-sm">
                      {project.description}
                    </p>
                    <Button
                      type="primary"
                      className="mt-4 bg-blue-600 !rounded-button whitespace-nowrap cursor-pointer self-start"
                    >
                      Ver Detalles
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="py-20 bg-white">
          <div className="container mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Contacta con Nosotros
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                ¿Listo para transformar tu negocio con soluciones automatizadas?
                Completa el formulario y nos pondremos en contacto contigo.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/2">
                <Form
                  form={form}
                  layout="vertical"
                  onFinish={handleSubmit}
                  className="p-8 bg-gray-50 rounded-lg shadow-sm"
                >
                  <Form.Item
                    name="name"
                    label="Nombre"
                    rules={[
                      {
                        required: true,
                        message: "Por favor ingresa tu nombre",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Tu nombre"
                      className="text-sm"
                    />
                  </Form.Item>

                  <Form.Item
                    name="email"
                    label="Correo Electrónico"
                    rules={[
                      {
                        required: true,
                        message: "Por favor ingresa tu correo electrónico",
                      },
                      {
                        type: "email",
                        message: "Ingresa un correo electrónico válido",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="tu@email.com"
                      className="text-sm"
                    />
                  </Form.Item>

                  <Form.Item name="company" label="Empresa">
                    <Input
                      size="large"
                      placeholder="Nombre de tu empresa"
                      className="text-sm"
                    />
                  </Form.Item>

                  <Form.Item name="service" label="Servicio de Interés">
                    <Select
                      size="large"
                      placeholder="Selecciona un servicio"
                      className="text-sm"
                    >
                      <Option value="automatizacion">
                        Automatización de Procesos
                      </Option>
                      <Option value="ia">Inteligencia Artificial</Option>
                      <Option value="integracion">
                        Integración de Sistemas
                      </Option>
                      <Option value="desarrollo">Desarrollo a Medida</Option>
                      <Option value="consultoria">
                        Consultoría Estratégica
                      </Option>
                      <Option value="soporte">Soporte Continuo</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item
                    name="message"
                    label="Mensaje"
                    rules={[
                      {
                        required: true,
                        message: "Por favor ingresa tu mensaje",
                      },
                    ]}
                  >
                    <TextArea
                      rows={4}
                      placeholder="Cuéntanos sobre tu proyecto o necesidad"
                      className="text-sm"
                    />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      size="large"
                      className="w-full bg-blue-600 !rounded-button whitespace-nowrap cursor-pointer"
                      loading={isSubmitting}
                    >
                      {submitSuccess ? (
                        <span className="flex items-center justify-center">
                          <CheckOutlined className="mr-2" /> Mensaje Enviado
                        </span>
                      ) : (
                        "Enviar Mensaje"
                      )}
                    </Button>
                  </Form.Item>
                </Form>
              </div>

              <div className="lg:w-1/2">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold mb-6">
                      Información de Contacto
                    </h3>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start">
                        <MailOutlined className="text-blue-600 text-xl mt-1 mr-4" />
                        <div>
                          <h4 className="font-semibold">Correo Electrónico</h4>
                          <p className="text-gray-600">kisler.tecnologia@gmail.com</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <PhoneOutlined className="text-blue-600 text-xl mt-1 mr-4" />
                        <div>
                          <h4 className="font-semibold">Teléfono</h4>
                          <p className="text-gray-600">+58 424 287 0937</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <EnvironmentOutlined className="text-blue-600 text-xl mt-1 mr-4" />
                        <div>
                          <h4 className="font-semibold">Ubicación</h4>
                          <p className="text-gray-600">
                            Calle Sta Eduviges, 36-26
                            <br />
                            1030 Caracas, Venezuela
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-2xl font-semibold mb-6">Síguenos</h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://twitter.com/ekracing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
                      >
                        <TwitterOutlined />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/emisael-kisler-fullstack/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
                      >
                        <LinkedinOutlined />
                      </a>
                      <a
                        href="https://github.com/ekisler"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
                      >
                        <GithubOutlined />
                      </a>
                    </div>
                  </div>

                  <div className="mt-12 p-6 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Horario de Atención</h4>
                    <p className="text-gray-600">
                      Lunes a Viernes: 9:00 - 18:00
                      <br />
                      Sábados: 10:00 - 14:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Content>

      {/* Footer */}
      <Footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-white mb-4 flex items-center">
                <RocketOutlined className="mr-2" /> AInnova Kisler
              </div>
              <p className="text-gray-400 mb-4">
                Transformando negocios con automatización inteligente y
                soluciones de IA personalizadas.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://twitter.com/ekracing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <i className="fab fa-github text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <i className="fab fa-facebook text-xl"></i>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#inicio"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="#servicios"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Servicios
                  </a>
                </li>
                <li>
                  <a
                    href="#casos"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Casos de Uso
                  </a>
                </li>
                <li>
                  <a
                    href="#proyectos"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Proyectos
                  </a>
                </li>
                <li>
                  <a
                    href="#contacto"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Automatización de Procesos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Inteligencia Artificial
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Integración de Sistemas
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Desarrollo a Medida
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Consultoría Estratégica
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Política de Privacidad
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Términos y Condiciones
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Política de Cookies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Aviso Legal
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>
              © {new Date().getFullYear()} AInnova Kisler. Todos los derechos
              reservados.
            </p>
            <p className="mt-2">
              Diseñado y desarrollado por Emisael Kisler, Desarrollador
              Fullstack.
            </p>
            <div className="mt-4 flex justify-center space-x-4">
              <i className="fab fa-cc-visa text-2xl"></i>
              <i className="fab fa-cc-mastercard text-2xl"></i>
              <i className="fab fa-cc-paypal text-2xl"></i>
            </div>
          </div>
        </div>
      </Footer>

      {/* Project Modal */}
      <Modal
        title={selectedProject?.title}
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={800}
      >
        {selectedProject && (
          <div>
            <div className="mb-6 overflow-hidden rounded-lg">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-auto"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              {selectedProject.title}
            </h3>
            <p className="text-gray-600 mb-4">{selectedProject.description}</p>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">Desafío</h4>
              <p className="text-gray-600">
                El cliente necesitaba optimizar sus procesos operativos que
                consumían demasiado tiempo y recursos, limitando su capacidad de
                crecimiento y generando errores frecuentes.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2">Solución</h4>
              <p className="text-gray-600">
                Implementamos una solución personalizada utilizando N8N para
                automatizar los flujos de trabajo críticos, integrando sus
                sistemas existentes y añadiendo capacidades de inteligencia
                artificial para la toma de decisiones.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Resultados</h4>
              <ul className="list-disc list-inside text-gray-600">
                <li>Reducción del 75% en tiempo de procesamiento</li>
                <li>Eliminación de errores manuales</li>
                <li>Aumento del 40% en productividad</li>
                <li>ROI positivo en menos de 6 meses</li>
              </ul>
            </div>
          </div>
        )}
      </Modal>
    </Layout>
  );
};

export default App;

