import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProductColor {
  name: string;
  hex: string;
  image: string;
}

const colors: ProductColor[] = [
  { 
    name: "Глибокий зелений", 
    hex: "#1B4D3E",
    image: "https://images.unsplash.com/photo-1633991201346-3dd19fd6afe1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdW1hJTIwaG9vZGllJTIwYmxhY2slMjBzcG9ydHN3ZWFyfGVufDF8fHx8MTc4MDA1ODExM3ww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  { 
    name: "Графітовий", 
    hex: "#3D3D3D",
    image: "https://images.unsplash.com/photo-1633991201346-3dd19fd6afe1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdW1hJTIwaG9vZGllJTIwYmxhY2slMjBzcG9ydHN3ZWFyfGVufDF8fHx8MTc4MDA1ODExM3ww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  { 
    name: "Пастельний синій", 
    hex: "#7BA5CC",
    image: "https://images.unsplash.com/photo-1633991201346-3dd19fd6afe1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdW1hJTIwaG9vZGllJTIwYmxhY2slMjBzcG9ydHN3ZWFyfGVufDF8fHx8MTc4MDA1ODExM3ww&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

const sizes = ["S", "M", "L", "XL"];

export function ProductPage() {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState("M");
  const [isFavorite, setIsFavorite] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Section */}
          <div className="relative">
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all"
              aria-label={isFavorite ? "Видалити з обраного" : "Додати в обране"}
            >
              <Heart
                className={`w-6 h-6 transition-colors ${
                  isFavorite ? "fill-red-500 text-red-500" : "text-gray-700"
                }`}
              />
            </button>
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <ImageWithFallback
                src={selectedColor.image}
                alt="Puma AirTech Hoodie"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Marketing Badges */}
            <div className="flex gap-3 mt-4">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                💧 Водовідштовхуюче
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                🔥 Терморегуляція
              </Badge>
            </div>
          </div>

          {/* Product Info Section */}
          <div className="flex flex-col">
            {/* Brand and Title */}
            <div className="mb-6">
              <p className="text-xs tracking-widest uppercase text-gray-500 mb-2">
                НОВА КОЛЕКЦІЯ
              </p>
              <h1 className="text-4xl md:text-5xl tracking-tight mb-2">
                Водонепроникне худі Puma AirTech
              </h1>
              <p className="text-xl text-gray-600 font-medium">Puma</p>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl text-red-600">
                  2 500 грн
                </span>
                <span className="text-xl text-gray-400 line-through">
                  3 250 грн
                </span>
              </div>
            </div>

            {/* Countdown Timer */}
            {timeLeft > 0 && (
              <div className="bg-orange-50 border border-orange-200 rounded-lg px-4 py-3 mb-6">
                <p className="text-sm text-orange-900">
                  🔥 <span className="font-semibold">Замовте протягом {formatTime(timeLeft)}</span> та отримайте ще -5% як новий покупець!
                </p>
              </div>
            )}

            {/* Color Selection */}
            <div className="mb-6">
              <label className="block text-sm mb-3">
                Колір: <span className="font-medium">{selectedColor.name}</span>
              </label>
              <div className="flex gap-3">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`w-12 h-12 rounded-full border-2 transition-all ${
                      selectedColor.name === color.name
                        ? "border-black scale-110"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    style={{ backgroundColor: color.hex }}
                    aria-label={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-8">
              <label className="block text-sm mb-3">
                Розмір: <span className="font-medium">{selectedSize}</span>
              </label>
              <div className="grid grid-cols-4 gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 px-4 border-2 rounded-lg transition-all ${
                      selectedSize === size
                        ? "border-black bg-black text-white"
                        : "border-gray-300 hover:border-gray-400 bg-white"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-auto space-y-3">
              <Button 
                size="lg" 
                className="w-full h-14 text-lg bg-black hover:bg-gray-800"
              >
                Додати в кошик
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="w-full h-14 text-lg md:hidden"
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <Heart className={`w-5 h-5 mr-2 ${isFavorite ? "fill-current" : ""}`} />
                {isFavorite ? "В обраному" : "Додати в обране"}
              </Button>
            </div>

            {/* Product Description */}
            <div className="mt-8 pt-8 border-t">
              <h3 className="text-lg mb-3">Про товар</h3>
              <p className="text-gray-600 leading-relaxed">
                Водонепроникне худі Puma AirTech створене з використанням інноваційних технологій для максимального комфорту. Матеріал відштовхує воду та забезпечує оптимальну терморегуляцію в будь-яку погоду. Ідеально підходить для активного відпочинку та тренувань.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
