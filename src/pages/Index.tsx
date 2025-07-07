import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [area, setArea] = useState("");
  const [material, setMaterial] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculateMaterial = () => {
    if (!area || !material) return;

    const consumption = {
      cement: 25, // кг/м²
      "tile-glue": 3, // кг/м²
      plaster: 12, // кг/м²
      primer: 0.15, // л/м²
    };

    const calc =
      parseFloat(area) * consumption[material as keyof typeof consumption];
    setResult(calc);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Icon name="Building2" className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">
                СтройМатериалы
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Главная
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                О компании
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Каталог
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Калькуляторы
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Доставка
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Контакты
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />
                Корзина
              </Button>
              <Button size="sm">Заказать звонок</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Качественные строительные материалы для профессионалов
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Производитель сухих цементных смесей и дистрибьютор российских
                производителей. Быстрая доставка и профессиональная поддержка.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Открыть каталог
                </Button>
                <Button variant="outline" size="lg">
                  Рассчитать стоимость
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/41596891-82b3-45b3-b9b0-99fef17c5301.jpg"
                alt="Склад строительных материалов"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Каталог материалов
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "Hammer",
                title: "Цементные смеси",
                desc: "Сухие строительные смеси собственного производства",
              },
              {
                icon: "Wrench",
                title: "Инструменты",
                desc: "Профессиональный инструмент для строительства",
              },
              {
                icon: "Truck",
                title: "Материалы",
                desc: "Широкий ассортимент от российских производителей",
              },
              {
                icon: "Calculator",
                title: "Калькуляторы",
                desc: "Точный расчет необходимых материалов",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow cursor-pointer"
              >
                <CardHeader className="text-center">
                  <Icon
                    name={item.icon}
                    className="h-12 w-12 mx-auto text-blue-600 mb-4"
                  />
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Калькулятор расхода материалов
          </h3>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Calculator" className="h-5 w-5 mr-2" />
                Рассчитать количество материала
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="area">Площадь поверхности (м²)</Label>
                  <Input
                    id="area"
                    type="number"
                    placeholder="Введите площадь"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="material">Тип материала</Label>
                  <Select value={material} onValueChange={setMaterial}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите материал" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cement">Цементная смесь</SelectItem>
                      <SelectItem value="tile-glue">Клей для плитки</SelectItem>
                      <SelectItem value="plaster">Штукатурка</SelectItem>
                      <SelectItem value="primer">Грунтовка</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 items-end">
                <Button
                  onClick={calculateMaterial}
                  className="bg-blue-600 hover:bg-blue-700"
                  disabled={!area || !material}
                >
                  Рассчитать
                </Button>
                {result !== null && (
                  <div className="p-4 bg-blue-50 rounded-lg flex-1">
                    <p className="text-lg font-semibold text-blue-800">
                      Необходимо: {result} {material === "primer" ? "л" : "кг"}
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                О компании
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Мы — ведущий производитель сухих цементных смесей и официальный
                дистрибьютор российских производителей строительных материалов.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    15+
                  </div>
                  <div className="text-sm text-gray-600">лет на рынке</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    1000+
                  </div>
                  <div className="text-sm text-gray-600">
                    довольных клиентов
                  </div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    50+
                  </div>
                  <div className="text-sm text-gray-600">видов материалов</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    24/7
                  </div>
                  <div className="text-sm text-gray-600">поддержка</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Icon name="Shield" className="h-8 w-8 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Гарантия качества
                  </h4>
                  <p className="text-gray-600">
                    Все материалы сертифицированы и соответствуют ГОСТ
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Icon name="Truck" className="h-8 w-8 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Быстрая доставка
                  </h4>
                  <p className="text-gray-600">
                    Доставка по Москве и области в день заказа
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Icon name="Users" className="h-8 w-8 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Экспертная поддержка
                  </h4>
                  <p className="text-gray-600">
                    Консультации по выбору и применению материалов
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Building2" className="h-6 w-6" />
                <span className="text-xl font-bold">СтройМатериалы</span>
              </div>
              <p className="text-gray-400">
                Качественные строительные материалы для профессионалов
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Цементные смеси
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Клеи и герметики
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Инструменты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Материалы
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Доставка
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Консультации
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Калькуляторы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Техподдержка
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <Icon name="Phone" className="h-4 w-4 mr-2" />
                  +7 (495) 123-45-67
                </p>
                <p className="flex items-center">
                  <Icon name="Mail" className="h-4 w-4 mr-2" />
                  info@stroymaterials.ru
                </p>
                <p className="flex items-center">
                  <Icon name="MapPin" className="h-4 w-4 mr-2" />
                  Москва, ул. Строителей, 15
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 СтройМатериалы. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
