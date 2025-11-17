'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Heart, Share2, ShoppingCart, MapPin, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

export function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const images = [
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-j79XqA3sLiuSePhYGq0CswTQAkuE1H.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-SLt74nsalMCqWsTDcLu2aVgSaWKcrA.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-URx5lx8QrNA9l14g5WNf0zH3XjNIgJ.jpg',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-eHpl9ByooofS2DxGSUqxHkB4OhUQXD.jpg',
  ]

  return (
    <div className="min-h-screen bg-[#EDEDED]">
      {/* Header */}
      <header className="bg-[#FFF159] shadow-sm">
        <div className="max-w-[1200px] mx-auto px-4 py-3">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center flex-shrink-0 p-2">
              <Image 
                src="https://logodownload.org/wp-content/uploads/2016/08/mercado-livre-logo-0-1-2048x2048.png"
                alt="Mercado Livre"
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>
            {/* </CHANGE> */}
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Estou buscando..."
                  className="w-full px-4 py-3 rounded-md bg-white text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <button className="lg:hidden p-2">
              <div className="w-6 h-0.5 bg-gray-700 mb-1"></div>
              <div className="w-6 h-0.5 bg-gray-700 mb-1"></div>
              <div className="w-6 h-0.5 bg-gray-700"></div>
            </button>
            <ShoppingCart className="w-6 h-6 text-gray-700 hidden lg:block" />
          </div>
        </div>
      </header>

      <div className="bg-[#FFF159] border-t border-yellow-400">
        <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between text-gray-700">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span className="text-sm">Informe seu CEP</span>
          </div>
          <ChevronRight className="w-5 h-5" />
        </div>
      </div>
      {/* </CHANGE> */}

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-4 py-6">
        <a href="#" className="text-blue-600 text-sm mb-4 inline-block hover:underline">
          Conferir mais produtos da marca CBC
        </a>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-4">
          {/* Left Column - Images and Details */}
          <div className="space-y-4">
            {/* Image Gallery */}
            <Card className="p-6 bg-white rounded-lg">
              <Badge className="mb-2 bg-gray-100 text-gray-700 hover:bg-gray-100">
                Novo
              </Badge>
              <h1 className="text-2xl text-gray-900 mb-6 font-normal leading-tight">
                Carabina Pressão Cbc Nitro X 1000 Oxidada 6.35mm
              </h1>

              <div className="flex gap-4 mb-4">
                {/* Thumbnail Images */}
                <div className="flex flex-col gap-2">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`w-12 h-12 rounded border overflow-hidden ${
                        selectedImage === idx ? 'border-blue-500 border-2' : 'border-gray-300'
                      }`}
                    >
                      <Image 
                        src={img || "/placeholder.svg"} 
                        alt={`Product view ${idx + 1}`}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                  <div className="text-xs text-gray-600 text-center mt-1">
                    {selectedImage + 1} / {images.length}
                  </div>
                </div>

                {/* Main Image */}
                <div className="flex-1 bg-white rounded-lg flex items-center justify-center relative">
                  <Image 
                    src={images[selectedImage] || "/placeholder.svg"} 
                    alt="CBC Nitro X 1000"
                    width={600}
                    height={600}
                    className="w-full h-auto max-h-[500px] object-contain"
                  />
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50">
                    <Heart className="w-5 h-5 text-blue-600" />
                  </button>
                </div>
              </div>

              <div className="flex justify-end">
                <button className="text-blue-600 text-sm flex items-center gap-1 hover:underline">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </Card>

            {/* Product Characteristics */}
            <Card className="p-6 bg-white rounded-lg">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Características do produto</h2>
              
              <h3 className="text-base font-semibold mb-3 text-gray-900">Características principais</h3>
              <div className="space-y-3 mb-6">
                <div className="bg-gray-50 p-3 rounded flex justify-between">
                  <span className="text-gray-700">Fabricante</span>
                  <span className="text-gray-900 font-normal">CBC</span>
                </div>
                <div className="bg-white p-3 rounded flex justify-between">
                  <span className="text-gray-700">Marca</span>
                  <span className="text-gray-900 font-normal">CBC</span>
                </div>
                <div className="bg-gray-50 p-3 rounded flex justify-between">
                  <span className="text-gray-700">Modelo</span>
                  <span className="text-gray-900 font-normal">Nitro-X 1000</span>
                </div>
              </div>

              <h3 className="text-base font-semibold mb-3 text-gray-900">Outros</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 p-3 rounded flex justify-between">
                  <span className="text-gray-700">Modos de disparo</span>
                  <span className="text-gray-900 font-normal">1</span>
                </div>
                <div className="bg-white p-3 rounded flex justify-between">
                  <span className="text-gray-700">Tipo de arma</span>
                  <span className="text-gray-900 font-normal">Carabina de pressão</span>
                </div>
                <div className="bg-gray-50 p-3 rounded flex justify-between">
                  <span className="text-gray-700">Material da coronha</span>
                  <span className="text-gray-900 font-normal">Polímero</span>
                </div>
                <div className="bg-white p-3 rounded flex justify-between">
                  <span className="text-gray-700">Sistema</span>
                  <span className="text-gray-900 font-normal">Pneumático</span>
                </div>
                <div className="bg-gray-50 p-3 rounded flex justify-between">
                  <span className="text-gray-700">É apto para munições bbs</span>
                  <span className="text-gray-900 font-normal">Não</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Purchase Info */}
          <div>
            <Card className="p-4 bg-white rounded-lg sticky top-4">
              <div className="mb-4">
                <p className="text-sm text-gray-700 mb-2">Cor: <span className="font-semibold">Preto</span></p>
              </div>

              {/* Price */}
              <div className="mb-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-light text-gray-900">R$ 1.000</span>
                </div>
                <p className="text-sm text-gray-700 mt-1">
                  12x R$ 98<sup className="text-xs">74</sup> com cartão Mercado Pago
                </p>
                <a href="#" className="text-blue-600 text-sm hover:underline">Ver os meios de pagamento</a>
              </div>

              <div className="mb-4 pb-4 border-b border-gray-200">
                <p className="text-green-600 font-semibold mb-1">Frete grátis</p>
                <p className="text-gray-700 text-sm">Goiânia, Goiás</p>
                <a href="#" className="text-blue-600 text-sm hover:underline">Ver formas de entrega</a>
              </div>

              {/* Stock warning */}
              <div className="mb-4 pb-4 border-b border-gray-200">
                <p className="text-gray-900 font-semibold">Último disponível!</p>
              </div>

              {/* Action Button */}
              <Link href="https://go.plataformafortpay.com.br/0txxkcppov">
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-base font-semibold rounded-lg"
                >
                  Comprar agora
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>

      {/* Guarantee and Payment Methods Section (1xt.jpg) */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-4 py-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1xt-vup93ctISI929x0FuCj7Nh4IZCi0OM.jpg"
            alt="Garantia e Meios de Pagamento"
            width={1200}
            height={600}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* App Banner and Menu Section (2xt.jpg) */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-4 py-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2xt-7mmpj5ESkoFkgivp7rQtTGx2vnOojn.jpg"
            alt="Menu e App"
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Popular Search Terms Section (3xt.jpg) */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-4 py-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3xt-JolyTyO2IAagBNjqhwrYSeJxrQ9WdG.jpg"
            alt="Termos mais procurados"
            width={1200}
            height={600}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Footer Section (4xt.jpg) */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-4 py-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4xt-P0ZiS9Nzn7tj3FnE3zLVVFyj2HLJjF.jpg"
            alt="Footer"
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </div>
      </footer>
    </div>
  )
}
