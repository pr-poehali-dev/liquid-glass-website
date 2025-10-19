import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [activeNav, setActiveNav] = useState('home');

  const navItems = [
    { id: 'messages', icon: 'MessageSquare', label: 'Сообщения' },
    { id: 'mail', icon: 'Mail', label: 'Почта' },
    { id: 'files', icon: 'FileText', label: 'Документы' },
    { id: 'calendar', icon: 'Calendar', label: 'Календарь' },
    { id: 'alerts', icon: 'AlertCircle', label: 'Уведомления' },
    { id: 'charts', icon: 'BarChart3', label: 'Аналитика' },
    { id: 'more', icon: 'MoreHorizontal', label: 'Ещё' },
  ];

  const mainModules = [
    { id: 1, title: 'Базы знаний', icon: 'Database', gradient: 'from-blue-400/30 to-cyan-400/30' },
    { id: 2, title: 'Анализ документации', icon: 'Search', gradient: 'from-violet-400/30 to-purple-400/30' },
    { id: 3, title: 'Создание документов', icon: 'FileOutput', gradient: 'from-emerald-400/30 to-teal-400/30' },
    { id: 4, title: 'Работа с НПА', icon: 'Scale', gradient: 'from-amber-400/30 to-orange-400/30' },
    { id: 5, title: 'Поручения', icon: 'CheckCircle2', gradient: 'from-rose-400/30 to-pink-400/30' },
    { id: 6, title: 'Обращения и запросы', icon: 'Inbox', gradient: 'from-indigo-400/30 to-blue-400/30' },
  ];

  const assignedToMe = [
    { id: 1, number: '3521', title: 'Подготовить справку о задолженностях в бюджет по налогам', deadline: '15.12.2024', priority: 'high', from: 'Иванов И.И.' },
    { id: 2, number: '3522', title: 'Проверить проект постановления', deadline: '18.12.2024', priority: 'medium', from: 'Петрова А.С.' },
    { id: 3, number: '3523', title: 'Согласовать план мероприятий', deadline: '20.12.2024', priority: 'low', from: 'Сидоров П.К.' },
    { id: 4, number: '3524', title: 'Подготовить отчет о выполнении бюджета', deadline: '16.12.2024', priority: 'high', from: 'Морозов В.А.' },
  ];

  const assignedByMe = [
    { id: 1, number: '4201', title: 'Провести анализ обращений граждан', deadline: '17.12.2024', assignee: 'Васильев М.П.', status: 'В работе' },
    { id: 2, number: '4202', title: 'Подготовить проект регламента', deadline: '19.12.2024', assignee: 'Николаева О.В.', status: 'Выполнено' },
    { id: 3, number: '4203', title: 'Обновить базу данных НПА', deadline: '21.12.2024', assignee: 'Козлов Д.А.', status: 'Новое' },
  ];

  const documentsInWork = [
    { id: 1, number: '5801', title: 'Постановление Правительства № 1247 от 12.12.2024 "О внесении изменений"', type: 'Постановление', date: '15.12.2024', status: 'На согласовании' },
    { id: 2, number: '5802', title: 'Распоряжение № 458 от 14.12.2024 "О проведении мероприятий"', type: 'Распоряжение', date: '16.12.2024', status: 'Черновик' },
    { id: 3, number: '5803', title: 'Служебная записка № 127 от 15.12.2024 "О выделении средств"', type: 'Записка', date: '17.12.2024', status: 'Доработка' },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-50 text-red-700 border-red-200';
      case 'medium': return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'low': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      default: return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case 'high': return 'Высокий';
      case 'medium': return 'Средний';
      case 'low': return 'Низкий';
      default: return '';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'В работе': return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Выполнено': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Новое': return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'На согласовании': return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Черновик': return 'bg-gray-50 text-gray-700 border-gray-200';
      case 'Доработка': return 'bg-orange-50 text-orange-700 border-orange-200';
      default: return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <aside className="w-20 bg-white/40 backdrop-blur-xl border-r border-white/30 flex flex-col items-center py-6 gap-3">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveNav(item.id)}
            className={`p-4 rounded-2xl transition-all duration-300 group relative ${
              activeNav === item.id
                ? 'bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg shadow-blue-500/30'
                : 'bg-white/60 hover:bg-white/80 shadow-sm'
            }`}
          >
            <Icon
              name={item.icon as any}
              size={22}
              className={activeNav === item.id ? 'text-white' : 'text-gray-600'}
            />
            <div className="absolute left-24 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
              {item.label}
            </div>
          </button>
        ))}
      </aside>

      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto p-8">
          <div className="mb-10">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
              ИИ-АРМ госслужащего
            </h1>
            <p className="text-gray-600">Сотрудник: В.Ефименко, Управление делопроизводства</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {mainModules.map((module) => (
              <Card
                key={module.id}
                className={`relative overflow-hidden p-8 bg-gradient-to-br ${module.gradient} backdrop-blur-xl border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group hover:scale-[1.02] rounded-3xl`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                <div className="relative">
                  <div className="mb-6">
                    <div className="inline-flex p-4 rounded-2xl bg-white/60 shadow-lg">
                      <Icon name={module.icon as any} size={32} className="text-gray-700" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {module.title}
                  </h3>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="p-6 bg-white/50 backdrop-blur-xl border border-white/40 shadow-xl rounded-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-red-400/20 to-pink-400/20">
                  <Icon name="UserCheck" size={24} className="text-red-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">Мне поручено</h2>
                <Badge className="ml-auto bg-gradient-to-r from-red-500 to-pink-500 text-white border-0 shadow-lg">
                  {assignedToMe.length}
                </Badge>
              </div>
              <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                {assignedToMe.map((task) => (
                  <div
                    key={task.id}
                    className="p-4 bg-white/70 rounded-2xl border border-white/60 hover:shadow-lg transition-all duration-200 cursor-pointer"
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

            <Card className="p-6 bg-white/50 backdrop-blur-xl border border-white/40 shadow-xl rounded-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-400/20 to-indigo-400/20">
                  <Icon name="Send" size={24} className="text-blue-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">Я поручил</h2>
                <Badge className="ml-auto bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-0 shadow-lg">
                  {assignedByMe.length}
                </Badge>
              </div>
              <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                {assignedByMe.map((task) => (
                  <div
                    key={task.id}
                    className="p-4 bg-white/70 rounded-2xl border border-white/60 hover:shadow-lg transition-all duration-200 cursor-pointer"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-gray-500">№ {task.number}</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-2 leading-tight">{task.title}</h4>
                    <div className="flex items-center justify-between text-xs text-gray-600 mb-1.5">
                      <span className="flex items-center gap-1">
                        <Icon name="User" size={14} />
                        {task.assignee}
                      </span>
                      <Badge className={`${getStatusColor(task.status)} text-xs px-2 py-0.5`}>
                        {task.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-600">
                      <Icon name="Calendar" size={14} />
                      <span>Срок исполнения: {task.deadline}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-white/50 backdrop-blur-xl border border-white/40 shadow-xl rounded-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-emerald-400/20 to-teal-400/20">
                  <Icon name="FileText" size={24} className="text-emerald-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">Документы в работе</h2>
                <Badge className="ml-auto bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0 shadow-lg">
                  {documentsInWork.length}
                </Badge>
              </div>
              <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                {documentsInWork.map((doc) => (
                  <div
                    key={doc.id}
                    className="p-4 bg-white/70 rounded-2xl border border-white/60 hover:shadow-lg transition-all duration-200 cursor-pointer"
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
                      <Badge className={`${getStatusColor(doc.status)} text-xs px-2 py-0.5`}>
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