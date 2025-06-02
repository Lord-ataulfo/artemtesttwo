
import React, { useState } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';
import Select from '../components/ui/Select';
import Button from '../components/ui/Button';
import { PROJECT_TYPES } from '../constants';
import { PhoneIcon, EmailIcon, MapPinIcon } from '../components/icons/ContactIcons';


interface ContactSectionProps {
  id: string;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  description: string;
  budget?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ id }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    projectType: '',
    description: '',
    budget: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "El nombre completo es obligatorio.";
    if (!formData.email.trim()) {
      newErrors.email = "El correo electrónico es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El formato del correo electrónico no es válido.";
    }
    if (!formData.phone.trim()) newErrors.phone = "El número de teléfono es obligatorio.";
    if (!formData.projectType) newErrors.projectType = "El tipo de proyecto es obligatorio.";
    if (!formData.description.trim()) newErrors.description = "La descripción breve del proyecto es obligatoria.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form data submitted:', formData);
      // Here you would typically send the data to a backend
      setIsSubmitted(true);
      setFormData({ fullName: '', email: '', phone: '', projectType: '', description: '', budget: '' });
      setTimeout(() => setIsSubmitted(false), 5000); // Reset message after 5 seconds
    }
  };

  return (
    <section id={id} className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Discutamos Su Visión"
          subtitle="¿Listo para dar vida a sus sueños arquitectónicos? Contáctenos hoy para una consulta inicial gratuita. Exploraremos el potencial de su proyecto y cómo nuestra experiencia puede transformar sus ideas en realidad."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
            <Input label="Nombre Completo" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} error={errors.fullName} required />
            <Input type="email" label="Correo Electrónico" id="email" name="email" value={formData.email} onChange={handleChange} error={errors.email} required />
            <Input type="tel" label="Número de Teléfono" id="phone" name="phone" value={formData.phone} onChange={handleChange} error={errors.phone} required />
            <Select label="Tipo de Proyecto" id="projectType" name="projectType" options={PROJECT_TYPES} value={formData.projectType} onChange={handleChange} error={errors.projectType} required />
            <Textarea label="Breve Descripción del Proyecto" id="description" name="description" value={formData.description} onChange={handleChange} error={errors.description} required />
            <Input label="Presupuesto Estimado (Opcional)" id="budget" name="budget" value={formData.budget || ''} onChange={handleChange} />
            <Button type="submit" variant="primary" size="lg" className="w-full">
              Enviar Consulta
            </Button>
            {isSubmitted && <p className="text-sm text-green-600 mt-4 text-center">¡Gracias! Su consulta ha sido enviada. Nos pondremos en contacto pronto.</p>}
          </form>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Métodos de Contacto Alternativos</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <PhoneIcon className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">+52 55 9876 5432</span>
                </div>
                <div className="flex items-center">
                  <EmailIcon className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">info@artem.com.mx</span>
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Av. Reforma 123, Ciudad de México, México</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
               <img src="https://picsum.photos/seed/mapMexico/800/400" alt="Ubicación del mapa" className="w-full h-64 object-cover" />
               <p className="text-xs text-gray-500 p-2 text-center">Representación de mapa. Nuestra oficina está ubicada en el corazón de la Ciudad de México.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
