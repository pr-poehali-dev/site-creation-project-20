import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const handleTelegramSubscribe = () => {
    window.open('https://t.me/architecture_media', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/20 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-serif font-bold text-slate-800">ARCHITECTURE MEDIA</h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">Главная</a>
              <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">Статьи</a>
              <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">Авторы</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section with Image */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://cdn.poehali.dev/files/953074e1-5519-44ef-9241-22e6b3388fb7.png"
            alt="Традиционный японский дом"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-7xl font-serif font-light mb-6 leading-tight">
              Японские традиционные дома
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90 leading-relaxed">
              Исследование архитектурного наследия страны восходящего солнца
            </p>
          </div>
        </div>
      </section>

      {/* Main Article Content */}
      <article className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Article Meta */}
          <div className="flex items-center gap-6 mb-8 text-sm text-slate-600">
            <Badge variant="secondary" className="bg-amber-100 text-amber-800 border-amber-200">
              Архитектура
            </Badge>
            <span className="flex items-center gap-2">
              <Icon name="Calendar" size={16} />
              25 июля 2025
            </span>
            <span className="flex items-center gap-2">
              <Icon name="Clock" size={16} />
              8 мин чтения
            </span>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-xl text-slate-600 leading-relaxed mb-8 font-light">
              Япония славится своей культурой и традициями, которые отражаются в архитектуре страны. 
              Одним из наиболее узнаваемых элементов японской архитектуры являются традиционные дома.
            </p>

            <p className="mb-6">
              <strong>Минка</strong> — традиционный японский дом. В узком смысле термин обозначает крестьянские дома, 
              построенные вплоть до конца эпохи Эдо. В широком смысле термин включает как крестьянские «нока», 
              так и городские дома «матия» того времени, а также дома, возведённые позже в традиционном стиле и технике.
            </p>

            <p className="mb-6">
              Традиционные японские дома имеют характерную форму, которая называется «минано». 
              Их отличает крыша, украшенная свисающими краями. Они часто строятся из дерева и имеют сложную систему каркаса, 
              которая позволяет им выдерживать сильные землетрясения.
            </p>

            <p className="mb-8">
              В таких домах используются только натуральные материалы: дерево, тростник и бумага. 
              Такой подход позволяет создавать дома, которые гармонично сочетаются с окружающей природой, 
              что является одним из фундаментальных принципов японской архитектуры. 
              «Скелет» дома, крыши, стены и опоры делаются из дерева.
            </p>

            <p className="mb-8">
              Типичный дом имеет от 3 до 6 комнат. Комнаты обычно располагаются вокруг центрального двора, 
              который может быть украшен садом или прудом.
            </p>

            {/* Highlight Box */}
            <div className="bg-amber-50 border-l-4 border-amber-400 p-6 my-8 rounded-r-lg">
              <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <Icon name="Lightbulb" size={20} className="text-amber-600" />
                Особенности планировки
              </h3>
              <p className="mb-4">
                В традиционных японских домах комнаты отделяются друг от друга с помощью раздвижных дверей, 
                называемых «фусума». Это позволяет изменять конфигурацию помещения в зависимости от потребностей хозяев.
              </p>
              <p>
                Основной пол земляной, над ним на высоте около 50 см устанавливается деревянный настил, 
                на котором сидят, спят, принимают пищу. Часть дома имеет лишь глинобитные полы. 
                В этих частях обычно располагаются кухни или мастерские.
              </p>
            </div>

            <p className="mb-6">
              Внутри домов можно увидеть «татами» — традиционные японские ковры, «футон» — матрасы для сна, 
              «шири-кавадзе» — традиционные японские шкафы, а также «шодзи» — декоративные перегородки из бумаги и дерева.
            </p>

            <p className="mb-6">
              Японские традиционные дома продолжают вдохновлять современных архитекторов по всему миру. 
              Многие современные здания сочетают в себе элементы старинной японской архитектуры с современными технологиями и материалами.
            </p>

            <p className="text-lg font-medium text-slate-800 mb-8">
              Традиционный японский дом — это не только красивое и функциональное строение, 
              но и один из важнейших символов японской культуры.
            </p>
          </div>
        </div>
      </article>

      {/* Author Section */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  АА
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-slate-800 mb-2">Александра Александрова</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    Архитектурный критик и исследователь восточной архитектуры. 
                    Специализируется на изучении традиционных японских построек и их влиянии на современный дизайн.
                  </p>
                  <div className="flex items-center gap-4">
                    <Button 
                      onClick={handleTelegramSubscribe}
                      className="bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-2"
                    >
                      <Icon name="Send" size={16} />
                      Подписаться на Telegram
                    </Button>
                    <span className="text-sm text-slate-500">@architecture_media</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-serif font-bold text-slate-800 text-center mb-12">
            Читайте также
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 shadow-md">
              <div className="aspect-[4/3] overflow-hidden rounded-t-lg bg-gradient-to-br from-blue-100 to-blue-200">
                <div className="w-full h-full flex items-center justify-center">
                  <Icon name="Building" size={48} className="text-blue-600" />
                </div>
              </div>
              <CardHeader>
                <Badge variant="secondary" className="w-fit bg-blue-100 text-blue-800">Архитектура</Badge>
                <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                  Скандинавский минимализм в архитектуре
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Исследование принципов северного дизайна и их применение в современном строительстве.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 shadow-md">
              <div className="aspect-[4/3] overflow-hidden rounded-t-lg bg-gradient-to-br from-green-100 to-green-200">
                <div className="w-full h-full flex items-center justify-center">
                  <Icon name="Trees" size={48} className="text-green-600" />
                </div>
              </div>
              <CardHeader>
                <Badge variant="secondary" className="w-fit bg-green-100 text-green-800">Дизайн</Badge>
                <CardTitle className="text-lg group-hover:text-green-600 transition-colors">
                  Биофильный дизайн интерьеров
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Как природные элементы улучшают наше самочувствие и продуктивность в помещениях.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 shadow-md">
              <div className="aspect-[4/3] overflow-hidden rounded-t-lg bg-gradient-to-br from-purple-100 to-purple-200">
                <div className="w-full h-full flex items-center justify-center">
                  <Icon name="Palette" size={48} className="text-purple-600" />
                </div>
              </div>
              <CardHeader>
                <Badge variant="secondary" className="w-fit bg-purple-100 text-purple-800">Культура</Badge>
                <CardTitle className="text-lg group-hover:text-purple-600 transition-colors">
                  Цветовые традиции в азиатской архитектуре
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Символизм и психология цвета в традиционных постройках Востока.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-serif font-bold mb-4">ARCHITECTURE MEDIA</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Журнал о современной и традиционной архитектуре, дизайне интерьеров и культурном наследии.
              </p>
              <div className="flex space-x-4">
                <a href="https://t.me/architecture_media" target="_blank" rel="noopener noreferrer" 
                   className="text-slate-400 hover:text-white transition-colors">
                  <Icon name="Send" size={20} />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white transition-colors">Архитектура</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Дизайн интерьеров</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Культурное наследие</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Современные тренды</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <p className="text-slate-300 mb-2">
                Подписывайтесь на наш Telegram-канал для получения новых статей
              </p>
              <Button 
                onClick={handleTelegramSubscribe}
                variant="outline" 
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
              >
                @architecture_media
              </Button>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>© 2025 Architecture Media. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}