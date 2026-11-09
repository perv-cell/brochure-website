  import Link from 'next/link';

  export const metadata = {
    title: 'Политика конфиденциальности | PerSolution',
    description: 'Политика в отношении обработки персональных данных сайта PerSolution.',
  };

  export default function PrivacyPolicy() {
    return (
      <main className="min-h-screen bg-white dark:bg-[#0f0f19] text-slate-800 dark:text-slate-300 py-20 px-6">
        <div className="max-w-4xl mx-auto">

          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 mb-8 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Вернуться на главную
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Политика в отношении обработки персональных данных
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-12">
            Редакция от {new Date().getFullYear()} года
          </p>

          <div className="space-y-8 text-base leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">1. Общие положения</h2>
              <p className="mb-4">
                Настоящая Политика в отношении обработки персональных данных (далее — «Политика») составлена в соответствии с требованиями Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных» и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных, предпринимаемые Оператором:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4 bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                <li><strong className="text-slate-900 dark:text-white">Наименование:</strong> {process.env.NEXT_PUBLIC_LEGAL_STATUS} {process.env.NEXT_PUBLIC_LEGAL_NAME}</li>
                <li><strong className="text-slate-900 dark:text-white">ИНН:</strong> {process.env.NEXT_PUBLIC_LEGAL_INN}</li>
                <li><strong className="text-slate-900 dark:text-white">E-mail для обращений:</strong> <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} className="text-cyan-500 hover:underline">{process.env.NEXT_PUBLIC_EMAIL}</a></li>
              </ul>
              <p className="mb-4">
                1.1. Оператор ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну.
              </p>
              <p>
                1.2. Настоящая Политика распространяется на всю информацию, которую Оператор может получить о посетителях веб-сайта <strong className="text-slate-900 dark:text-white">{process.env.NEXT_PUBLIC_URL}</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">2. Основные понятия</h2>
              <ul className="list-disc pl-5 space-y-3">
                <li><strong>Персональные данные</strong> — любая информация, относящаяся прямо или косвенно к определенному или определяемому Пользователю сайта.</li>
                <li><strong>Пользователь</strong> — любой посетитель веб-сайта {process.env.NEXT_PUBLIC_URL}.</li>
                <li><strong>Обработка персональных данных</strong> — любое действие (операция) или совокупность действий, совершаемых с персональными данными (сбор, запись, систематизация, хранение, уточнение, извлечение, использование, передача, блокирование, удаление, уничтожение).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">3. Категории и объем обрабатываемых данных</h2>
              <p className="mb-4">Оператор может обрабатывать следующие персональные данные Пользователя:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Имя;</li>
                <li>Адрес электронной почты (E-mail);</li>
                <li>Номер телефона;</li>
                <li>Текст сообщения (описание проекта);</li>
                <li>Обезличенные данные о посетителях (в т.ч. файлы «cookie», IP-адрес, тип браузера, операционная система) с помощью сервисов интернет-статистики (Яндекс.Метрика).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">4. Цели обработки персональных данных</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Предоставление консультаций, обработка входящих заявок на разработку сайтов и веб-приложений;</li>
                <li>Подготовка индивидуальных коммерческих предложений и расчет стоимости проектов;</li>
                <li>Установление обратной связи с Пользователем, включая направление уведомлений и запросов;</li>
                <li>Анализ взаимодействия пользователей с сайтом для оптимизации его быстродействия и структуры.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">5. Правовые основания обработки</h2>
              <p className="mb-4">Оператор обрабатывает персональные данные Пользователя только в случаях:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Их заполнения и/или отправки Пользователем самостоятельно через форму обратной связи на сайте;</li>
                <li>Согласия Пользователя с настоящей Политикой при отправке любой формы обратной связи.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">6. Порядок сбора, хранения и защиты данных</h2>
              <p className="mb-4">
                Безопасность персональных данных обеспечивается путем реализации правовых, организационных и технических мер, необходимых для выполнения в полном объеме требований действующего законодательства в области защиты информации.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Оператор обеспечивает сохранность персональных данных и принимает меры, исключающие доступ неуполномоченных лиц.</li>
                <li>Персональные данные Пользователя никогда и ни при каких условиях не передаются третьим лицам, за исключением случаев, связанных с исполнением действующего законодательства РФ, а также сервисов веб-аналитики (Яндекс.Метрика), которые обрабатывают обезличенные данные.</li>
                <li>Срок обработки персональных данных является неограниченным, но может быть прекращен в любой момент по инициативе субъекта персональных данных.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">7. Использование файлов Cookie</h2>
              <p className="mb-4">
                7.1. Сайт использует файлы «cookie» для корректной работы и анализа трафика. Продолжая использовать сайт, Пользователь соглашается с использованием файлов «cookie».
              </p>
              <p>
                7.2. Пользователь может в любой момент отключить сохранение файлов «cookie» в настройках своего браузера, однако это может повлиять на корректность работы некоторых функций сайта.
              </p>
            </section>

            <section id="consent">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">8. Права пользователя и порядок отзыва согласия</h2>
              <p className="mb-4">
                8.1. Пользователь имеет право на получение информации, касающейся обработки его персональных данных, а также на их уточнение, блокирование или уничтожение.
              </p>
              <p>
                8.2. Пользователь может в любой момент отозвать свое согласие на обработку персональных данных, направив Оператору письменное уведомление на электронный адрес: <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} className="text-cyan-500 hover:underline">{process.env.NEXT_PUBLIC_EMAIL}</a> с пометкой «Отзыв согласия на обработку персональных данных».
              </p>
            </section>

            <section className="pt-8 border-t border-slate-200 dark:border-slate-700">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">9. Заключительные положения</h2>
              <p className="mb-4">
                9.1. Пользователь может получить любые разъяснения по интересующим вопросам, касающимся обработки его персональных данных, обратившись к Оператору по электронной почте <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} className="text-cyan-500 hover:underline">{process.env.NEXT_PUBLIC_EMAIL}</a>.
              </p>
              <p>
                9.2. Настоящая Политика действует бессрочно до замены её новой версией. Актуальная версия всегда находится в свободном доступе по адресу: {process.env.NEXT_PUBLIC_LINK_POLICY_CONF}.
              </p>
            </section>

          </div>
        </div>
      </main>
    );
  }
