import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Подписка на:', email);
    setEmail('');
  };

  const featuredArticles = [
    {
      id: 1,
      title: 'Искусство медленного чтения в цифровую эпоху',
      excerpt: 'Как восстановить глубокое понимание текста в мире быстрого контента и бесконечной прокрутки.',
      category: 'Культура',
      readTime: '8 мин',
      image: '/img/780e7411-39cd-4b1c-89a0-1775df9d065e.jpg',
      date: '15 июля 2024'
    },
    {
      id: 2,
      title: 'Философия минимализма в современном дизайне',
      excerpt: 'Исследование принципов, которые формируют эстетику простоты и функциональности.',
      category: 'Дизайн',
      readTime: '6 мин',
      image: '/img/0133cf24-0cc0-423e-a16a-d599eb9f18f7.jpg',
      date: '12 июля 2024'
    },
    {
      id: 3,
      title: 'Тишина как новая роскошь XXI века',
      excerpt: 'Почему способность к концентрации и внутреннему спокойствию становится самым ценным навыком.',
      category: 'Психология',
      readTime: '10 мин',
      image: '/img/780e7411-39cd-4b1c-89a0-1775df9d065e.jpg',
      date: '10 июля 2024'
    }
  ];

  const categories = ['Культура', 'Дизайн', 'Психология', 'Технологии', 'Философия'];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-serif font-bold text-foreground">REFLECTIONS</h1>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Главная</a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Статьи</a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Рубрики</a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Контакты</a>
              </nav>
            </div>
            <Button variant="outline" size="sm">
              <Icon name="Search" size={16} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-light text-foreground mb-6 max-w-4xl mx-auto">
            Глубокие размышления о современном мире
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-sans">
            Журнал для тех, кто ценит качественную аналитику, вдумчивые эссе и неспешные размышления о важном.
          </p>
          <div className="flex justify-center">
            <Button className="font-sans font-medium">
              Читать статьи
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-serif font-bold text-foreground">Избранные статьи</h2>
            <Button variant="ghost" className="font-sans">
              Все статьи
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <Card key={article.id} className="group cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="font-sans text-xs">{article.category}</Badge>
                    <span className="text-xs text-muted-foreground font-sans">{article.readTime}</span>
                  </div>
                  <CardTitle className="text-xl font-serif font-bold leading-tight group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="font-sans text-muted-foreground mb-4 leading-relaxed">
                    {article.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground font-sans">{article.date}</span>
                    <Icon name="BookOpen" size={16} className="text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-foreground text-center mb-12">Рубрики</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="font-sans font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Icon name="Mail" size={48} className="mx-auto mb-6 text-primary" />
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Подписка на рассылку
            </h2>
            <p className="text-lg text-muted-foreground mb-8 font-sans">
              Получайте лучшие статьи и размышления прямо на почту. Раз в неделю, без спама.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Ваш email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 font-sans"
                required
              />
              <Button type="submit" className="font-sans font-medium">
                Подписаться
              </Button>
            </form>
            <p className="text-sm text-muted-foreground mt-4 font-sans">
              Мы уважаем вашу приватность. Отписаться можно в любой момент.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-serif font-bold text-foreground mb-4">REFLECTIONS</h3>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                Журнал глубоких размышлений о современном мире, культуре и человеческой природе.
              </p>
            </div>
            <div>
              <h4 className="font-sans font-semibold text-foreground mb-4">Разделы</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-sans text-sm">Главная</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-sans text-sm">Статьи</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-sans text-sm">Рубрики</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-sans text-sm">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-sans font-semibold text-foreground mb-4">Рубрики</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-sans text-sm">Культура</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-sans text-sm">Дизайн</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-sans text-sm">Психология</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-sans text-sm">Технологии</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-sans font-semibold text-foreground mb-4">Связь</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Icon name="Rss" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground font-sans text-sm">
              © 2024 Reflections. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}