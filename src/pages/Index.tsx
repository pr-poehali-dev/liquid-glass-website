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
    { id: 1, title: 'Подготовить аналитическую справку', deadline: '15.12.2024', priority: 'high', from: 'Иванов И.И.' },
    { id: 2, title: 'Проверить проект постановления', deadline: '18.12.2024', priority: 'medium', from: 'Петрова А.С.' },
    { id: 3, title: 'Согласовать план мероприятий', deadline: '20.12.2024', priority: 'low', from: 'Сидоров П.К.' },
  ];

  const assignedByMe = [
    { id: 1, title: 'Свод данных по регионам', deadline: '16.12.2024', assignee: 'Коновалова М.А.', status: 'В работе' },
    { id: 2, title: 'Экспертное заключение', deadline: '19.12.2024', assignee: 'Смирнов Д.В.', status: 'Выполнено' },
  ];

  const documentsInWork = [
    { id: 1, title: 'Проект распоряжения №1245', type: 'Распоряжение', date: '14.12.2024', status: 'На согласовании' },
    { id: 2, title: 'Приказ о внесении изменений', type: 'Приказ', date: '13.12.2024', status: 'Черновик' },
    { id: 3, title: 'Аналитическая записка', type: 'Записка', date: '12.12.2024', status: 'Доработка' },
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
                      <h4 className="font-semibold text-gray-800 text-sm leading-tight">{task.title}</h4>
                      <Badge className={`${getPriorityColor(task.priority)} border text-xs px-2 py-0.5`}>
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