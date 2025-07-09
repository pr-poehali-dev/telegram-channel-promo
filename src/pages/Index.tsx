import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-orange-400 to-blue-500">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" className="h-8 w-8 text-white" />
              <span className="text-2xl font-bold text-white">UC Store</span>
            </div>
            <Button
              className="bg-white text-orange-600 hover:bg-gray-100 font-semibold"
              onClick={() =>
                window.open("https://t.me/vezun4ik_pubg", "_blank")
              }
            >
              <Icon name="Send" className="mr-2 h-4 w-4" />
              Подписаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-white/20 text-white border-white/30 mb-6 text-lg px-4 py-2">
            🎮 Самые низкие цены на UC
          </Badge>
          <h1 className="text-6xl sm:text-7xl font-bold text-white mb-6 leading-tight">
            UC по самым
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              низким ценам
            </span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Экономь на покупке UC для PUBG Mobile! Лучшие цены, быстрая
            доставка, проверенный продавец.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4"
              onClick={() =>
                window.open("https://t.me/vezun4ik_pubg", "_blank")
              }
            >
              <Icon name="Send" className="mr-2 h-5 w-5" />
              Подписаться на канал
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 text-lg px-8 py-4"
            >
              <Icon name="ShoppingCart" className="mr-2 h-5 w-5" />
              Посмотреть цены
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Почему выбирают нас?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-orange-500 rounded-full w-fit">
                  <Icon name="DollarSign" className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-white text-2xl">
                  Низкие цены
                </CardTitle>
                <CardDescription className="text-white/80">
                  Гарантированно самые выгодные цены на UC
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-white/90">
                  Мы предлагаем UC по ценам на 30-50% ниже официальных. Никаких
                  скрытых комиссий!
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-blue-500 rounded-full w-fit">
                  <Icon name="Zap" className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-white text-2xl">
                  Быстрая доставка
                </CardTitle>
                <CardDescription className="text-white/80">
                  Получай UC моментально после оплаты
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-white/90">
                  Автоматическая доставка в течение 1-5 минут. Работаем 24/7!
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-green-500 rounded-full w-fit">
                  <Icon name="Shield" className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-white text-2xl">
                  100% гарантия
                </CardTitle>
                <CardDescription className="text-white/80">
                  Полная безопасность твоего аккаунта
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-white/90">
                  Используем только официальные методы пополнения. Гарантия
                  возврата!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Актуальные цены
          </h2>
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader className="text-center">
              <CardTitle className="text-white text-3xl mb-4">
                💎 Специальные предложения
              </CardTitle>
              <CardDescription className="text-white/80 text-lg">
                Лучшие цены на UC для PUBG Mobile
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-4 text-white">
                  <div className="text-xl font-bold mb-2">60 UC</div>
                  <div className="text-2xl font-bold">80₽</div>
                </div>
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-4 text-white">
                  <div className="text-xl font-bold mb-2">120 UC</div>
                  <div className="text-2xl font-bold">160₽</div>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-lg p-4 text-white">
                  <div className="text-xl font-bold mb-2">180 UC</div>
                  <div className="text-2xl font-bold">240₽</div>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-4 text-white">
                  <div className="text-xl font-bold mb-2">240 UC</div>
                  <div className="text-2xl font-bold">320₽</div>
                </div>
                <div className="bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg p-4 text-white">
                  <div className="text-xl font-bold mb-2">325 UC</div>
                  <div className="text-2xl font-bold">400₽</div>
                </div>
                <div className="bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg p-4 text-white">
                  <div className="text-xl font-bold mb-2">385 UC</div>
                  <div className="text-2xl font-bold">480₽</div>
                </div>
                <div className="bg-gradient-to-r from-green-600 to-emerald-500 rounded-lg p-4 text-white md:col-span-2 lg:col-span-1">
                  <div className="text-xl font-bold mb-2">660 UC</div>
                  <div className="text-2xl font-bold">800₽</div>
                </div>
              </div>
              <div className="text-center pt-6">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-12 py-4"
                  onClick={() =>
                    window.open("https://t.me/vezun4ik_pubg", "_blank")
                  }
                >
                  <Icon name="Send" className="mr-2 h-5 w-5" />
                  Заказать в Telegram
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Готов экономить на UC?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Присоединяйся к нашему каналу и получай UC по самым низким ценам!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4"
              onClick={() =>
                window.open("https://t.me/vezun4ik_pubg", "_blank")
              }
            >
              <Icon name="Send" className="mr-2 h-5 w-5" />
              Подписаться на канал
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 text-lg px-8 py-4"
              onClick={() =>
                window.open("https://t.me/vezun4ik_pubg", "_blank")
              }
            >
              <Icon name="MessageCircle" className="mr-2 h-5 w-5" />
              Написать в личку
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-sm border-t border-white/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <Icon name="Zap" className="h-6 w-6 text-white" />
              <span className="text-xl font-bold text-white">UC Store</span>
            </div>
            <p className="text-white/60 mb-4">
              Самые низкие цены на UC для PUBG Mobile
            </p>
            <div className="flex justify-center space-x-6">
              <Button
                variant="ghost"
                className="text-white hover:text-orange-300"
                onClick={() =>
                  window.open("https://t.me/vezun4ik_pubg", "_blank")
                }
              >
                <Icon name="Send" className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                className="text-white hover:text-orange-300"
                onClick={() =>
                  window.open("https://t.me/vezun4ik_pubg", "_blank")
                }
              >
                <Icon name="MessageCircle" className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
