import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const Index = () => {
  const [activeNav, setActiveNav] = useState('home');

  const navItems = [
    { id: 'messages', icon: 'MessageSquare', label: 'Сообщения' },
    { id: 'mail', icon: 'Mail', label: 'Почта' },
    { id: 'files', icon: 'FileText', label: 'Документы' },
    { id: 'calendar', icon: 'Calendar', label: 'Календарь' },
    { id: 'alerts', icon: 'AlertCircle', label: 'Уведомления' },
    { id: 'charts', icon: 'BarChart3', label: 'Аналитика' },
    { id: 'users', icon: 'Users', label: 'Сотрудники' },
    { id: 'more', icon: 'MoreHorizontal', label: 'Ещё' },
  ];

  const mainModules = [
    { id: 1, title: 'Добавление информации', icon: 'PlusCircle', color: 'from-sky-400/20 to-blue-400/20', count: null },
    { id: 2, title: 'Анализ документации', icon: 'Search', color: 'from-cyan-400/20 to-teal-400/20', count: 12 },
    { id: 3, title: 'Генерация документов', icon: 'FileOutput', color: 'from-blue-400/20 to-indigo-400/20', count: null },
    { id: 4, title: 'Работа с НПА', icon: 'Scale', color: 'from-indigo-400/20 to-purple-400/20', count: 8 },
    { id: 5, title: 'Поручения', icon: 'CheckCircle2', color: 'from-teal-400/20 to-emerald-400/20', count: 15 },
    { id: 6, title: 'Обращения и запросы', icon: 'Inbox', color: 'from-emerald-400/20 to-green-400/20', count: 23 },
  ];

  const assignedToMe = [
    { id: 1, number: '3521', title: 'Подготовить аналитическую справку', deadline: '15.12.2024', priority: 'high', from: 'Иванов И.И.' },
    { id: 2, number: '3522', title: 'Проверить проект постановления', deadline: '18.12.2024', priority: 'medium', from: 'Петрова А.С.' },
    { id: 3, number: '3523', title: 'Согласовать план мероприятий', deadline: '20.12.2024', priority: 'low', from: 'Сидоров П.К.' },
    { id: 4, number: '3524', title: 'Подготовить отчет о выполнении бюджета', deadline: '16.12.2024', priority: 'high', from: 'Морозов В.А.' },
    { id: 5, number: '3525', title: 'Проанализировать обращения граждан', deadline: '19.12.2024', priority: 'medium', from: 'Кузнецова Е.И.' },
    { id: 6, number: '3526', title: 'Разработать проект регламента', deadline: '21.12.2024', priority: 'low', from: 'Соколов А.П.' },
    { id: 7, number: '3527', title: 'Согласовать график отпусков', deadline: '17.12.2024', priority: 'high', from: 'Новикова Т.С.' },
    { id: 8, number: '3528', title: 'Подготовить ответ на запрос прокуратуры', deadline: '16.12.2024', priority: 'high', from: 'Волков Д.М.' },
    { id: 9, number: '3529', title: 'Проверить смету расходов', deadline: '22.12.2024', priority: 'medium', from: 'Лебедева О.К.' },
    { id: 10, number: '3530', title: 'Составить план закупок', deadline: '23.12.2024', priority: 'low', from: 'Павлов С.Н.' },
    { id: 11, number: '3531', title: 'Подготовить материалы к совещанию', deadline: '17.12.2024', priority: 'high', from: 'Федорова Н.В.' },
    { id: 12, number: '3532', title: 'Проверить договоры с подрядчиками', deadline: '20.12.2024', priority: 'medium', from: 'Михайлов Г.Б.' },
    { id: 13, number: '3533', title: 'Разработать методические рекомендации', deadline: '24.12.2024', priority: 'low', from: 'Романова И.Л.' },
    { id: 14, number: '3534', title: 'Согласовать техническое задание', deadline: '18.12.2024', priority: 'high', from: 'Егоров П.Р.' },
    { id: 15, number: '3535', title: 'Подготовить пояснительную записку', deadline: '19.12.2024', priority: 'medium', from: 'Козлова А.Ю.' },
    { id: 16, number: '3536', title: 'Проанализировать статистические данные', deadline: '25.12.2024', priority: 'low', from: 'Медведев К.О.' },
    { id: 17, number: '3537', title: 'Подготовить проект приказа', deadline: '18.12.2024', priority: 'high', from: 'Захарова Л.М.' },
    { id: 18, number: '3538', title: 'Согласовать план работы комиссии', deadline: '21.12.2024', priority: 'medium', from: 'Борисов Н.Д.' },
    { id: 19, number: '3539', title: 'Проверить акты выполненных работ', deadline: '26.12.2024', priority: 'low', from: 'Степанова В.Г.' },
    { id: 20, number: '3540', title: 'Подготовить служебную записку', deadline: '19.12.2024', priority: 'high', from: 'Васильев Ю.С.' },
    { id: 21, number: '3541', title: 'Разработать план мероприятий по контролю', deadline: '22.12.2024', priority: 'medium', from: 'Алексеева О.А.' },
    { id: 22, number: '3542', title: 'Согласовать положение о структурном подразделении', deadline: '27.12.2024', priority: 'low', from: 'Григорьев Р.В.' },
    { id: 23, number: '3543', title: 'Подготовить информацию для отчета', deadline: '20.12.2024', priority: 'high', from: 'Тимофеева С.П.' },
    { id: 24, number: '3544', title: 'Проверить реестр полномочий', deadline: '23.12.2024', priority: 'medium', from: 'Крылов И.Н.' },
    { id: 25, number: '3545', title: 'Разработать должностную инструкцию', deadline: '28.12.2024', priority: 'low', from: 'Виноградова Т.Л.' },
    { id: 26, number: '3546', title: 'Согласовать план проверок', deadline: '21.12.2024', priority: 'high', from: 'Макаров Б.К.' },
    { id: 27, number: '3547', title: 'Подготовить ответ на письмо министерства', deadline: '24.12.2024', priority: 'medium', from: 'Антонова М.Е.' },
    { id: 28, number: '3548', title: 'Проанализировать показатели эффективности', deadline: '29.12.2024', priority: 'low', from: 'Семенов Ф.Ж.' },
    { id: 29, number: '3549', title: 'Подготовить проект договора', deadline: '22.12.2024', priority: 'high', from: 'Денисова К.Х.' },
    { id: 30, number: '3550', title: 'Согласовать график приема граждан', deadline: '25.12.2024', priority: 'medium', from: 'Орлов З.Ц.' },
    { id: 31, number: '3551', title: 'Проверить отчет об исполнении бюджета', deadline: '23.12.2024', priority: 'high', from: 'Жданова Р.Щ.' },
    { id: 32, number: '3552', title: 'Подготовить проект письма в министерство', deadline: '26.12.2024', priority: 'medium', from: 'Ермаков Ш.Э.' },
    { id: 33, number: '3553', title: 'Разработать план контрольных мероприятий', deadline: '30.12.2024', priority: 'low', from: 'Яшина Ю.Я.' },
    { id: 34, number: '3554', title: 'Согласовать проект нормативного акта', deadline: '24.12.2024', priority: 'high', from: 'Беляев А.Ъ.' },
    { id: 35, number: '3555', title: 'Подготовить аналитическую записку', deadline: '27.12.2024', priority: 'medium', from: 'Гордеева Ы.Ь.' },
    { id: 36, number: '3556', title: 'Проверить реестр государственного имущества', deadline: '31.12.2024', priority: 'low', from: 'Дроздов Э.Ю.' },
    { id: 37, number: '3557', title: 'Подготовить материалы к заседанию коллегии', deadline: '25.12.2024', priority: 'high', from: 'Ефимова Я.А.' },
    { id: 38, number: '3558', title: 'Согласовать техническое задание на закупку', deadline: '28.12.2024', priority: 'medium', from: 'Жаров Б.В.' },
    { id: 39, number: '3559', title: 'Разработать критерии оценки эффективности', deadline: '29.12.2024', priority: 'low', from: 'Зотова Г.Д.' },
    { id: 40, number: '3560', title: 'Подготовить проект постановления правительства', deadline: '26.12.2024', priority: 'high', from: 'Игнатьев Е.Ж.' },
    { id: 41, number: '3561', title: 'Проверить акты проверок', deadline: '29.12.2024', priority: 'medium', from: 'Калинина З.И.' },
    { id: 42, number: '3562', title: 'Согласовать план повышения квалификации', deadline: '30.12.2024', priority: 'low', from: 'Львов К.Л.' },
    { id: 43, number: '3563', title: 'Подготовить информацию для вышестоящего органа', deadline: '27.12.2024', priority: 'high', from: 'Мишина М.Н.' },
    { id: 44, number: '3564', title: 'Разработать проект соглашения о взаимодействии', deadline: '30.12.2024', priority: 'medium', from: 'Носов О.П.' },
    { id: 45, number: '3565', title: 'Согласовать проект плана финансирования', deadline: '31.12.2024', priority: 'low', from: 'Осипова Р.С.' },
  ];

  const assignedByMe = [
    { id: 1, number: '4201', title: 'Свод данных по регионам', deadline: '16.12.2024', assignee: 'Коновалова М.А.', status: 'В работе' },
    { id: 2, number: '4202', title: 'Экспертное заключение', deadline: 'Смирнов Д.В.', assignee: 'Смирнов Д.В.', status: 'Выполнено' },
    { id: 3, number: '4203', title: 'Анализ финансовых показателей', deadline: '17.12.2024', assignee: 'Белова Н.П.', status: 'В работе' },
    { id: 4, number: '4204', title: 'Подготовка презентации', deadline: '18.12.2024', assignee: 'Гусев А.Л.', status: 'Новое' },
    { id: 5, number: '4205', title: 'Проверка документации', deadline: '19.12.2024', assignee: 'Давыдова Е.С.', status: 'В работе' },
    { id: 6, number: '4206', title: 'Составление отчета', deadline: '20.12.2024', assignee: 'Жуков М.Т.', status: 'Выполнено' },
    { id: 7, number: '4207', title: 'Разработка инструкции', deadline: '21.12.2024', assignee: 'Зайцева О.Б.', status: 'В работе' },
    { id: 8, number: '4208', title: 'Согласование проекта', deadline: '22.12.2024', assignee: 'Ильин В.Г.', status: 'Новое' },
    { id: 9, number: '4209', title: 'Подготовка материалов', deadline: '23.12.2024', assignee: 'Киселева Л.Д.', status: 'В работе' },
    { id: 10, number: '4210', title: 'Проверка расчетов', deadline: '24.12.2024', assignee: 'Лазарев С.Ф.', status: 'Выполнено' },
    { id: 11, number: '4211', title: 'Анализ обращений', deadline: '25.12.2024', assignee: 'Матвеева И.К.', status: 'В работе' },
    { id: 12, number: '4212', title: 'Разработка регламента', deadline: '26.12.2024', assignee: 'Никитин П.Н.', status: 'Новое' },
    { id: 13, number: '4213', title: 'Подготовка справки', deadline: '27.12.2024', assignee: 'Ольгина Т.М.', status: 'В работе' },
    { id: 14, number: '4214', title: 'Проверка сметы', deadline: '28.12.2024', assignee: 'Панов Р.О.', status: 'Выполнено' },
    { id: 15, number: '4215', title: 'Составление плана', deadline: '29.12.2024', assignee: 'Родионова А.В.', status: 'В работе' },
    { id: 16, number: '4216', title: 'Согласование графика', deadline: '30.12.2024', assignee: 'Савельев Д.Г.', status: 'Новое' },
    { id: 17, number: '4217', title: 'Подготовка заключения', deadline: '17.12.2024', assignee: 'Титова Н.Л.', status: 'В работе' },
    { id: 18, number: '4218', title: 'Проверка актов', deadline: '18.12.2024', assignee: 'Уваров К.Ж.', status: 'Выполнено' },
    { id: 19, number: '4219', title: 'Анализ показателей', deadline: '19.12.2024', assignee: 'Фролова М.И.', status: 'В работе' },
    { id: 20, number: '4220', title: 'Разработка методики', deadline: '20.12.2024', assignee: 'Харитонов Б.С.', status: 'Новое' },
    { id: 21, number: '4221', title: 'Подготовка записки', deadline: '21.12.2024', assignee: 'Цветкова Е.Р.', status: 'В работе' },
    { id: 22, number: '4222', title: 'Проверка договоров', deadline: '22.12.2024', assignee: 'Чернов А.П.', status: 'Выполнено' },
    { id: 23, number: '4223', title: 'Составление реестра', deadline: '23.12.2024', assignee: 'Шестакова О.Н.', status: 'В работе' },
    { id: 24, number: '4224', title: 'Согласование положения', deadline: '24.12.2024', assignee: 'Щербаков В.Д.', status: 'Новое' },
    { id: 25, number: '4225', title: 'Подготовка информации', deadline: '25.12.2024', assignee: 'Юдина Л.К.', status: 'В работе' },
    { id: 26, number: '4226', title: 'Проверка документов', deadline: '26.12.2024', assignee: 'Яковлева Т.Б.', status: 'Выполнено' },
    { id: 27, number: '4227', title: 'Анализ данных', deadline: '27.12.2024', assignee: 'Абрамов С.Г.', status: 'В работе' },
    { id: 28, number: '4228', title: 'Разработка проекта', deadline: '28.12.2024', assignee: 'Богданова И.Ф.', status: 'Новое' },
    { id: 29, number: '4229', title: 'Подготовка отчета', deadline: '29.12.2024', assignee: 'Воронов М.Л.', status: 'В работе' },
    { id: 30, number: '4230', title: 'Согласование приказа', deadline: '30.12.2024', assignee: 'Голубева Н.Х.', status: 'Выполнено' },
    { id: 31, number: '4231', title: 'Подготовка обзора законодательства', deadline: '23.12.2024', assignee: 'Гаврилов Т.У.', status: 'В работе' },
    { id: 32, number: '4232', title: 'Проверка отчетности', deadline: '24.12.2024', assignee: 'Дмитриева Ф.Х.', status: 'Новое' },
    { id: 33, number: '4233', title: 'Разработка инструкции по работе', deadline: '25.12.2024', assignee: 'Евдокимов Ц.Ч.', status: 'Выполнено' },
    { id: 34, number: '4234', title: 'Согласование программы мероприятий', deadline: '26.12.2024', assignee: 'Филиппова Ш.Щ.', status: 'В работе' },
    { id: 35, number: '4235', title: 'Подготовка аналитической справки', deadline: '27.12.2024', assignee: 'Хохлов Ъ.Ы.', status: 'Новое' },
    { id: 36, number: '4236', title: 'Проверка договоров на соответствие', deadline: '28.12.2024', assignee: 'Цыганова Ь.Э.', status: 'В работе' },
    { id: 37, number: '4237', title: 'Составление реестра контрактов', deadline: '29.12.2024', assignee: 'Чижов Ю.Я.', status: 'Выполнено' },
    { id: 38, number: '4238', title: 'Согласование положения о комиссии', deadline: '30.12.2024', assignee: 'Шилова А.Б.', status: 'В работе' },
    { id: 39, number: '4239', title: 'Подготовка отчета о выполнении плана', deadline: '31.12.2024', assignee: 'Щукин В.Г.', status: 'Новое' },
    { id: 40, number: '4240', title: 'Проверка смет расходов', deadline: '23.12.2024', assignee: 'Юрьев Д.Е.', status: 'В работе' },
    { id: 41, number: '4241', title: 'Анализ эффективности расходования средств', deadline: '24.12.2024', assignee: 'Якушева Ж.З.', status: 'Выполнено' },
    { id: 42, number: '4242', title: 'Разработка плана работы на квартал', deadline: '25.12.2024', assignee: 'Артемов И.К.', status: 'В работе' },
    { id: 43, number: '4243', title: 'Подготовка проекта приказа о награждении', deadline: '26.12.2024', assignee: 'Блинова Л.М.', status: 'Новое' },
    { id: 44, number: '4244', title: 'Согласование графика проведения конкурсов', deadline: '27.12.2024', assignee: 'Веселов Н.О.', status: 'В работе' },
    { id: 45, number: '4245', title: 'Проверка актов приема-передачи', deadline: '28.12.2024', assignee: 'Голованова П.Р.', status: 'Выполнено' },
  ];

  const documentsInWork = [
    { id: 1, number: '5801', title: 'Проект распоряжения №1245', type: 'Распоряжение', date: '14.12.2024', status: 'На согласовании' },
    { id: 2, number: '5802', title: 'Приказ о внесении изменений', type: 'Приказ', date: '13.12.2024', status: 'Черновик' },
    { id: 3, number: '5803', title: 'Аналитическая записка', type: 'Записка', date: '12.12.2024', status: 'Доработка' },
    { id: 4, number: '5804', title: 'Постановление о бюджете', type: 'Постановление', date: '15.12.2024', status: 'На согласовании' },
    { id: 5, number: '5805', title: 'Служебная записка о закупках', type: 'Записка', date: '16.12.2024', status: 'Черновик' },
    { id: 6, number: '5806', title: 'Приказ об утверждении регламента', type: 'Приказ', date: '17.12.2024', status: 'Доработка' },
    { id: 7, number: '5807', title: 'Распоряжение о комиссии', type: 'Распоряжение', date: '18.12.2024', status: 'На согласовании' },
    { id: 8, number: '5808', title: 'Проект договора поставки', type: 'Договор', date: '19.12.2024', status: 'Черновик' },
    { id: 9, number: '5809', title: 'Информационная справка', type: 'Справка', date: '20.12.2024', status: 'Доработка' },
    { id: 10, number: '5810', title: 'Приказ о штатном расписании', type: 'Приказ', date: '21.12.2024', status: 'На согласовании' },
    { id: 11, number: '5811', title: 'Постановление о мерах поддержки', type: 'Постановление', date: '22.12.2024', status: 'Черновик' },
    { id: 12, number: '5812', title: 'Аналитический отчет', type: 'Отчет', date: '23.12.2024', status: 'Доработка' },
    { id: 13, number: '5813', title: 'Распоряжение о проверке', type: 'Распоряжение', date: '24.12.2024', status: 'На согласовании' },
    { id: 14, number: '5814', title: 'Приказ о премировании', type: 'Приказ', date: '25.12.2024', status: 'Черновик' },
    { id: 15, number: '5815', title: 'Методические рекомендации', type: 'Методика', date: '26.12.2024', status: 'Доработка' },
    { id: 16, number: '5816', title: 'Постановление о тарифах', type: 'Постановление', date: '27.12.2024', status: 'На согласовании' },
    { id: 17, number: '5817', title: 'Проект положения', type: 'Положение', date: '28.12.2024', status: 'Черновик' },
    { id: 18, number: '5818', title: 'Служебная записка об отпусках', type: 'Записка', date: '29.12.2024', status: 'Доработка' },
    { id: 19, number: '5819', title: 'Распоряжение о командировках', type: 'Распоряжение', date: '30.12.2024', status: 'На согласовании' },
    { id: 20, number: '5820', title: 'Приказ о должностных инструкциях', type: 'Приказ', date: '15.12.2024', status: 'Черновик' },
    { id: 21, number: '5821', title: 'Аналитическая справка по кадрам', type: 'Справка', date: '16.12.2024', status: 'Доработка' },
    { id: 22, number: '5822', title: 'Постановление о программе развития', type: 'Постановление', date: '17.12.2024', status: 'На согласовании' },
    { id: 23, number: '5823', title: 'Проект соглашения', type: 'Соглашение', date: '18.12.2024', status: 'Черновик' },
    { id: 24, number: '5824', title: 'Информация для отчета', type: 'Информация', date: '19.12.2024', status: 'Доработка' },
    { id: 25, number: '5825', title: 'Приказ о комиссии по закупкам', type: 'Приказ', date: '20.12.2024', status: 'На согласовании' },
    { id: 26, number: '5826', title: 'Распоряжение о графике работы', type: 'Распоряжение', date: '21.12.2024', status: 'Черновик' },
    { id: 27, number: '5827', title: 'Служебная записка о совещании', type: 'Записка', date: '22.12.2024', status: 'Доработка' },
    { id: 28, number: '5828', title: 'Постановление об оплате труда', type: 'Постановление', date: '23.12.2024', status: 'На согласовании' },
    { id: 29, number: '5829', title: 'Проект регламента', type: 'Регламент', date: '24.12.2024', status: 'Черновик' },
    { id: 30, number: '5830', title: 'Аналитическая записка о контроле', type: 'Записка', date: '25.12.2024', status: 'Доработка' },
    { id: 31, number: '5831', title: 'Приказ о создании рабочей группы', type: 'Приказ', date: '26.12.2024', status: 'На согласовании' },
    { id: 32, number: '5832', title: 'Распоряжение о проведении инвентаризации', type: 'Распоряжение', date: '27.12.2024', status: 'Черновик' },
    { id: 33, number: '5833', title: 'Служебная записка о результатах проверки', type: 'Записка', date: '28.12.2024', status: 'Доработка' },
    { id: 34, number: '5834', title: 'Постановление об утверждении плана', type: 'Постановление', date: '29.12.2024', status: 'На согласовании' },
    { id: 35, number: '5835', title: 'Проект договора о сотрудничестве', type: 'Договор', date: '30.12.2024', status: 'Черновик' },
    { id: 36, number: '5836', title: 'Аналитическая справка по обращениям', type: 'Справка', date: '31.12.2024', status: 'Доработка' },
    { id: 37, number: '5837', title: 'Приказ об итогах работы за год', type: 'Приказ', date: '15.12.2024', status: 'На согласовании' },
    { id: 38, number: '5838', title: 'Постановление о дополнительных мерах', type: 'Постановление', date: '16.12.2024', status: 'Черновик' },
    { id: 39, number: '5839', title: 'Методические указания по применению', type: 'Методика', date: '17.12.2024', status: 'Доработка' },
    { id: 40, number: '5840', title: 'Распоряжение о режиме работы', type: 'Распоряжение', date: '18.12.2024', status: 'На согласовании' },
    { id: 41, number: '5841', title: 'Проект положения о структуре', type: 'Положение', date: '19.12.2024', status: 'Черновик' },
    { id: 42, number: '5842', title: 'Служебная записка о кадровых вопросах', type: 'Записка', date: '20.12.2024', status: 'Доработка' },
    { id: 43, number: '5843', title: 'Приказ о внесении дополнений', type: 'Приказ', date: '21.12.2024', status: 'На согласовании' },
    { id: 44, number: '5844', title: 'Постановление о целевых показателях', type: 'Постановление', date: '22.12.2024', status: 'Черновик' },
    { id: 45, number: '5845', title: 'Аналитическая записка о мониторинге', type: 'Записка', date: '23.12.2024', status: 'Доработка' },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case 'high': return 'Срочно';
      case 'medium': return 'Средний';
      case 'low': return 'Низкий';
      default: return '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 flex">
      <aside className="w-20 bg-white/60 backdrop-blur-xl border-r border-white/20 shadow-lg flex flex-col items-center py-6 gap-2">
        <div className="mb-8 p-2 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-500 shadow-lg">
          <Icon name="Layers" size={28} className="text-white" />
        </div>
        
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveNav(item.id)}
            className={`p-3 rounded-2xl transition-all duration-300 group relative ${
              activeNav === item.id
                ? 'bg-gradient-to-br from-sky-400/20 to-blue-400/20 shadow-md'
                : 'hover:bg-white/40 hover:shadow-md'
            }`}
          >
            <Icon 
              name={item.icon as any} 
              size={22} 
              className={activeNav === item.id ? 'text-sky-600' : 'text-gray-600 group-hover:text-sky-500'}
            />
            <div className="absolute left-full ml-3 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap pointer-events-none z-50">
              {item.label}
            </div>
          </button>
        ))}
      </aside>

      <main className="flex-1 overflow-y-auto">
        <header className="bg-white/40 backdrop-blur-xl border-b border-white/20 px-8 py-5 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-1">ИИ-АРМ госслужащего</h1>
              <p className="text-sm text-gray-600">Добро пожаловать А. Ефименко, специалист Управления делами Администрации Раменское
</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2.5 rounded-xl bg-white/60 hover:bg-white/80 transition-all duration-200 shadow-sm">
                <Icon name="Bell" size={20} className="text-gray-700" />
              </button>
              <Avatar className="h-10 w-10 border-2 border-white/60 shadow-md">
                <AvatarFallback className="bg-gradient-to-br from-sky-400 to-blue-500 text-white font-semibold">ИИ</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        <div className="px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {mainModules.map((module) => (
              <Card
                key={module.id}
                className={`p-6 bg-gradient-to-br ${module.color} backdrop-blur-sm border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-[1.02] rounded-2xl`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-white/60 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={module.icon as any} size={28} className="text-sky-600" />
                  </div>
                  {module.count && (
                    <Badge className="bg-sky-500 text-white border-0 shadow-md px-3 py-1 text-sm font-semibold">
                      {module.count}
                    </Badge>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-sky-700 transition-colors">
                  {module.title}
                </h3>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="p-6 bg-white/60 backdrop-blur-sm border-white/40 shadow-lg rounded-2xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-xl bg-gradient-to-br from-red-400/20 to-orange-400/20">
                  <Icon name="UserCheck" size={22} className="text-red-600" />
                </div>
                <h2 className="text-lg font-bold text-gray-800">Мне поручено</h2>
                <Badge className="ml-auto bg-red-500 text-white border-0 shadow-sm">{assignedToMe.length}</Badge>
              </div>
              <div className="space-y-3">
                {assignedToMe.map((task) => (
                  <div
                    key={task.id}
                    className="p-4 bg-white/80 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-200 cursor-pointer"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-mono text-gray-500">№ {task.number}</span>
                        </div>
                        <h4 className="font-semibold text-gray-800 text-sm leading-tight">{task.title}</h4>
                      </div>
                      <Badge className={`${getPriorityColor(task.priority)} border text-xs px-2 py-0.5 flex-shrink-0`}>
                        {getPriorityLabel(task.priority)}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-600 mt-2">
                      <span className="flex items-center gap-1">
                        <Icon name="User" size={14} />
                        {task.from}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Calendar" size={14} />
                        {task.deadline}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-white/60 backdrop-blur-sm border-white/40 shadow-lg rounded-2xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-xl bg-gradient-to-br from-blue-400/20 to-indigo-400/20">
                  <Icon name="UserPlus" size={22} className="text-blue-600" />
                </div>
                <h2 className="text-lg font-bold text-gray-800">Я поручил</h2>
                <Badge className="ml-auto bg-blue-500 text-white border-0 shadow-sm">{assignedByMe.length}</Badge>
              </div>
              <div className="space-y-3">
                {assignedByMe.map((task) => (
                  <div
                    key={task.id}
                    className="p-4 bg-white/80 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-200 cursor-pointer"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-gray-500">№ {task.number}</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-2 leading-tight">{task.title}</h4>
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <span className="flex items-center gap-1">
                        <Icon name="User" size={14} />
                        {task.assignee}
                      </span>
                      <Badge className="bg-sky-100 text-sky-700 border-sky-200 border text-xs px-2 py-0.5">
                        {task.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-white/60 backdrop-blur-sm border-white/40 shadow-lg rounded-2xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-xl bg-gradient-to-br from-purple-400/20 to-pink-400/20">
                  <Icon name="FileText" size={22} className="text-purple-600" />
                </div>
                <h2 className="text-lg font-bold text-gray-800">Документы в работе</h2>
                <Badge className="ml-auto bg-purple-500 text-white border-0 shadow-sm">{documentsInWork.length}</Badge>
              </div>
              <div className="space-y-3">
                {documentsInWork.map((doc) => (
                  <div
                    key={doc.id}
                    className="p-4 bg-white/80 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-200 cursor-pointer"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-gray-500">№ {doc.number}</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-2 leading-tight">{doc.title}</h4>
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <span className="flex items-center gap-1">
                        <Icon name="FileType" size={14} />
                        {doc.type}
                      </span>
                      <Badge className="bg-purple-100 text-purple-700 border-purple-200 border text-xs px-2 py-0.5">
                        {doc.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;