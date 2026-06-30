import { X, Shield } from "lucide-react";
import { POUSADA_INFO } from "../data";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  if (!isOpen) return null;

  return (
    <div
      id="privacy-modal-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        id="privacy-modal-container"
        className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl relative animate-in zoom-in-95 duration-200 border border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-stone-50 border-b border-stone-100 p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-brand-blue/10 rounded-xl">
              <Shield className="w-5 h-5 text-brand-blue" />
            </div>
            <h3 className="font-serif font-bold text-stone-900 text-lg">
              Política de Privacidade
            </h3>
          </div>
          <button
            id="btn-close-privacy"
            onClick={onClose}
            className="p-3 min-w-[44px] min-h-[44px] rounded-full bg-stone-100 text-stone-700 hover:bg-stone-200 hover:text-stone-800 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 text-left text-stone-700 text-sm leading-relaxed max-h-[70vh] overflow-y-auto font-sans">
          <h4 className="font-serif font-bold text-stone-900 text-lg mb-6 pb-2 border-b border-stone-100">
            📄 POLÍTICA DE PRIVACIDADE (LGPD)
          </h4>
          
          <p className="mb-6 text-stone-800 font-medium">
            {POUSADA_INFO.name}
          </p>

          <div className="space-y-6">
            {/* Section 1 */}
            <div>
              <h5 className="font-semibold text-stone-900 text-sm uppercase tracking-wider mb-2">
                1. Identificação do controlador de dados
              </h5>
              <p className="mb-3">
                Este site é operado por <strong className="text-stone-950 font-medium">{POUSADA_INFO.name}</strong>, inscrita no CNPJ 43.796.811/0001-53, com endereço em {POUSADA_INFO.address}, doravante denominada “Pousada”.
              </p>
              <p className="mb-3">
                Para fins da LGPD, a Pousada é a Controladora dos Dados Pessoais coletados por meio deste site.
              </p>
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-100 text-xs">
                <span className="block font-semibold text-stone-800">Contato do Encarregado (DPO):</span>
                <span className="block text-brand-blue mt-0.5">📧 E-mail: {POUSADA_INFO.email}</span>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h5 className="font-semibold text-stone-900 text-sm uppercase tracking-wider mb-2">
                2. Coleta de dados pessoais
              </h5>
              <p className="mb-3">
                A Pousada poderá coletar dados pessoais fornecidos pelo usuário, tais como:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-stone-600 mb-3">
                <li>Nome completo</li>
                <li>E-mail</li>
                <li>Telefone / WhatsApp</li>
                <li>Dados de reserva (datas, número de hóspedes, preferências)</li>
                <li>Informações enviadas por formulários de contato</li>
                <li>Dados de navegação (cookies, IP, localização aproximada, dispositivo)</li>
              </ul>
              <p>
                A coleta ocorre mediante consentimento ou em hipóteses legais previstas na LGPD.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h5 className="font-semibold text-stone-900 text-sm uppercase tracking-wider mb-2">
                3. Finalidade do tratamento de dados
              </h5>
              <p className="mb-3">
                Os dados pessoais são tratados para as seguintes finalidades:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-stone-600">
                <li>Processamento de reservas e solicitações de hospedagem</li>
                <li>Atendimento ao cliente via canais digitais</li>
                <li>Envio de informações sobre hospedagem, disponibilidade e serviços</li>
                <li>Cumprimento de obrigações legais e regulatórias</li>
                <li>Melhoria da experiência do usuário no site</li>
                <li>Análise estatística e melhoria de serviços</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h5 className="font-semibold text-stone-900 text-sm uppercase tracking-wider mb-2">
                4. Bases legais para o tratamento
              </h5>
              <p className="mb-3">
                O tratamento de dados pessoais é realizado com base nas seguintes hipóteses da LGPD:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-stone-600">
                <li>Execução de contrato ou procedimentos preliminares (art. 7º, V)</li>
                <li>Consentimento do titular (art. 7º, I)</li>
                <li>Legítimo interesse da Pousada (art. 7º, IX)</li>
                <li>Cumprimento de obrigação legal ou regulatória (art. 7º, II)</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div>
              <h5 className="font-semibold text-stone-900 text-sm uppercase tracking-wider mb-2">
                5. Compartilhamento de dados
              </h5>
              <p className="mb-3">
                A Pousada poderá compartilhar dados pessoais apenas quando necessário com:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-stone-600 mb-3">
                <li>Plataformas de reserva e pagamento</li>
                <li>Prestadores de serviços essenciais (ex: hospedagem de site, sistemas de gestão)</li>
                <li>Parceiros operacionais vinculados à estadia</li>
                <li>Autoridades públicas, quando exigido por lei</li>
              </ul>
              <p>
                A Pousada não comercializa dados pessoais.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h5 className="font-semibold text-stone-900 text-sm uppercase tracking-wider mb-2">
                6. Armazenamento e segurança
              </h5>
              <p className="mb-3">
                Os dados pessoais são armazenados em ambientes seguros, com medidas técnicas e administrativas aptas a proteger contra:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-stone-600 mb-3">
                <li>Acesso não autorizado</li>
                <li>Perda, alteração ou destruição indevida</li>
                <li>Uso inadequado ou divulgação indevida</li>
              </ul>
              <p>
                O armazenamento ocorre apenas pelo tempo necessário para cumprimento das finalidades informadas ou exigência legal.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h5 className="font-semibold text-stone-900 text-sm uppercase tracking-wider mb-2">
                7. Direitos do titular de dados
              </h5>
              <p className="mb-3">
                Nos termos da LGPD, o titular pode solicitar:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-stone-600 mb-3">
                <li>Confirmação da existência de tratamento</li>
                <li>Acesso aos dados pessoais</li>
                <li>Correção de dados incompletos ou incorretos</li>
                <li>Anonimização, bloqueio ou eliminação de dados desnecessários</li>
                <li>Revogação do consentimento</li>
                <li>Portabilidade dos dados, quando aplicável</li>
              </ul>
              <p>
                As solicitações podem ser feitas pelo e-mail: <strong className="text-stone-900 font-medium">{POUSADA_INFO.email}</strong>
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h5 className="font-semibold text-stone-900 text-sm uppercase tracking-wider mb-2">
                8. Cookies e tecnologias de rastreamento
              </h5>
              <p className="mb-3">
                Utilizamos cookies e tecnologias similares para:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-stone-600 mb-3">
                <li>Melhorar a experiência de navegação</li>
                <li>Analisar desempenho do site</li>
                <li>Personalizar conteúdo e serviços</li>
              </ul>
              <p>
                O usuário pode desativar cookies no navegador, ciente de que isso pode afetar funcionalidades do site.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h5 className="font-semibold text-stone-900 text-sm uppercase tracking-wider mb-2">
                9. Retenção de dados
              </h5>
              <p className="mb-3">
                Os dados pessoais são armazenados pelo tempo necessário para:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-stone-600">
                <li>Cumprimento das finalidades informadas</li>
                <li>Execução de contrato de hospedagem</li>
                <li>Cumprimento de obrigações legais, fiscais ou regulatórias</li>
              </ul>
            </div>

            {/* Section 10 */}
            <div>
              <h5 className="font-semibold text-stone-900 text-sm uppercase tracking-wider mb-2">
                10. Transferência internacional de dados
              </h5>
              <p>
                Alguns dados podem ser processados por fornecedores de tecnologia localizados fora do Brasil, sempre com garantia de nível adequado de proteção de dados, conforme LGPD.
              </p>
            </div>

            {/* Section 11 */}
            <div>
              <h5 className="font-semibold text-stone-900 text-sm uppercase tracking-wider mb-2">
                11. Alterações desta política
              </h5>
              <p>
                Esta Política de Privacidade poderá ser atualizada a qualquer momento para refletir melhorias operacionais ou alterações legais. Recomendamos consulta periódica.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-stone-50 border-t border-stone-100 p-4 flex justify-end">
          <button
            id="btn-close-privacy-footer"
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
