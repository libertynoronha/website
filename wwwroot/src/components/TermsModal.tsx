import { X, FileText } from "lucide-react";
import { POUSADA_INFO } from "../data";

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsModal({ isOpen, onClose }: TermsModalProps) {
  if (!isOpen) return null;

  return (
    <div
      id="terms-modal-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        id="terms-modal-container"
        className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl relative animate-in zoom-in-95 duration-200 border border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-stone-50 border-b border-stone-100 p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-brand-blue/10 rounded-xl">
              <FileText className="w-5 h-5 text-brand-blue" />
            </div>
            <h3 className="font-serif font-bold text-stone-900 text-lg">
              Termos de Uso
            </h3>
          </div>
          <button
            id="btn-close-terms"
            onClick={onClose}
            className="p-1.5 rounded-full bg-stone-100 text-stone-500 hover:bg-stone-200 hover:text-stone-800 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 text-left text-stone-600 text-sm leading-relaxed max-h-[70vh] overflow-y-auto font-sans">
          <h4 className="font-serif font-bold text-stone-900 text-lg mb-6 pb-2 border-b border-stone-100">
            📄 TERMOS DE USO
          </h4>
          
          <p className="mb-6 text-stone-800 font-medium">
            {POUSADA_INFO.name}
          </p>

          <div className="space-y-6">
            {/* Section 1 */}
            <div>
              <h5 className="font-semibold text-stone-900 text-sm uppercase tracking-wider mb-2">
                1. Aceitação dos termos
              </h5>
              <p>
                Ao acessar este site, o usuário declara estar de acordo com estes Termos de Uso e com a Política de Privacidade da <strong className="text-stone-950 font-medium">{POUSADA_INFO.name}</strong>.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h5 className="font-semibold text-stone-900 text-sm uppercase tracking-wider mb-2">
                2. Finalidade do site
              </h5>
              <p>
                Este site tem caráter informativo e comercial, destinado à divulgação de acomodações, serviços e facilitação de reservas.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h5 className="font-semibold text-stone-900 text-sm uppercase tracking-wider mb-2">
                3. Reservas e hospedagem
              </h5>
              <ul className="list-disc pl-5 space-y-1 text-stone-600">
                <li>Reservas estão sujeitas à disponibilidade</li>
                <li>Valores e condições podem ser alterados sem aviso prévio</li>
                <li>A confirmação da reserva depende de validação pela Pousada ou plataforma intermediadora</li>
                <li>Políticas de cancelamento seguem a regra informada no momento da reserva</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h5 className="font-semibold text-stone-900 text-sm uppercase tracking-wider mb-2">
                4. Responsabilidades do usuário
              </h5>
              <p className="mb-2">
                O usuário compromete-se a:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-stone-600">
                <li>Fornecer informações verdadeiras</li>
                <li>Não utilizar o site para fins ilícitos</li>
                <li>Não tentar comprometer a segurança do sistema</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div>
              <h5 className="font-semibold text-stone-900 text-sm uppercase tracking-wider mb-2">
                5. Responsabilidade da Pousada
              </h5>
              <p className="mb-2">
                A Pousada não se responsabiliza por:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-stone-600">
                <li>Falhas temporárias de acesso ao site</li>
                <li>Conteúdos de sites de terceiros</li>
                <li>Erros decorrentes de informações fornecidas pelo usuário</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div>
              <h5 className="font-semibold text-stone-900 text-sm uppercase tracking-wider mb-2">
                6. Serviços de terceiros
              </h5>
              <p>
                O site pode conter links e integrações com serviços externos (ex: Booking, WhatsApp, gateways de pagamento). Cada serviço possui seus próprios termos e políticas.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h5 className="font-semibold text-stone-900 text-sm uppercase tracking-wider mb-2">
                7. Propriedade intelectual
              </h5>
              <p>
                Todo conteúdo do site (textos, imagens, marcas e identidade visual) é protegido por direitos autorais e não pode ser reproduzido sem autorização.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h5 className="font-semibold text-stone-900 text-sm uppercase tracking-wider mb-2">
                8. Alterações dos termos
              </h5>
              <p>
                A Pousada poderá alterar estes Termos de Uso a qualquer momento, sendo recomendada a revisão periódica.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h5 className="font-semibold text-stone-900 text-sm uppercase tracking-wider mb-2">
                9. Legislação aplicável
              </h5>
              <p>
                Estes Termos são regidos pelas leis da República Federativa do Brasil, especialmente a LGPD (Lei nº 13.709/2018) e o Código Civil.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-stone-50 border-t border-stone-100 p-4 flex justify-end">
          <button
            id="btn-close-terms-footer"
            onClick={onClose}
            className="bg-brand-blue hover:bg-brand-blue/90 text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all cursor-pointer shadow-sm hover:shadow"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}
