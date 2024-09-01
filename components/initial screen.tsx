import TerrainIcon from '@mui/icons-material/Terrain';
import NatureIcon from '@mui/icons-material/Nature';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

export function InitialScreen() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 md:px-8 lg:px-10 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <TerrainIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">Explore India</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="hover:underline" prefetch={false}>
            Destinations
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Hassle-free Travel
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Cultural Experiences
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Travel Guides
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm">
            Sign In
          </Button>
          <Button variant="solid" size="sm">
            Sign Up
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-[url('/placeholder.svg')] bg-cover bg-center py-20 px-6 md:px-8 lg:px-10 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Discover the Wonders of India
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground mb-8">
            Plan your perfect trip with our comprehensive travel guide.
          </p>
          <div className="max-w-lg mx-auto">
            <Select className="w-full mb-4">
              <SelectTrigger>
                <SelectValue placeholder="Select a city" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="delhi">Delhi</SelectItem>
                <SelectItem value="mumbai">Mumbai</SelectItem>
                <SelectItem value="bangalore">Bangalore</SelectItem>
                <SelectItem value="chennai">Chennai</SelectItem>
                <SelectItem value="kolkata">Kolkata</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="solid" className="w-full">
              Explore
            </Button>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20 px-6 md:px-8 lg:px-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">Discover Local Attractions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <img
                  src="/placeholder.svg"
                  alt="Attraction 1"
                  width={400}
                  height={300}
                  className="rounded-t-lg object-cover w-full h-48"
                  style={{ aspectRatio: "4 / 3", objectFit: "cover" }}
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Taj Mahal</h3>
                  <p className="text-muted-foreground mb-4">Iconic monument in Agra, a UNESCO World Heritage Site.</p>
                  <Button variant="outline" size="sm">
                    Book Tour
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/placeholder.svg"
                  alt="Attraction 2"
                  width={400}
                  height={300}
                  className="rounded-t-lg object-cover w-full h-48"
                  style={{ aspectRatio: "4 / 3", objectFit: "cover" }}
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Red Fort</h3>
                  <p className="text-muted-foreground mb-4">Historic fort in Delhi, a UNESCO World Heritage Site.</p>
                  <Button variant="outline" size="sm">
                    Book Tour
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/placeholder.svg"
                  alt="Attraction 3"
                  width={400}
                  height={300}
                  className="rounded-t-lg object-cover w-full h-48"
                  style={{ aspectRatio: "4 / 3", objectFit: "cover" }}
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Gateway of India</h3>
                  <p className="text-muted-foreground mb-4">
                    Iconic monument in Mumbai, a popular tourist destination.
                  </p>
                  <Button variant="outline" size="sm">
                    Book Tour
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-16 lg:py-20 px-6 md:px-8 lg:px-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
              Nature's Finest <NatureIcon className="h-6 w-6 inline-block ml-2" />
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <img
                  src="/placeholder.svg"
                  alt="Eco-Friendly Option 1"
                  width={400}
                  height={300}
                  className="rounded-t-lg object-cover w-full h-48"
                  style={{ aspectRatio: "4 / 3", objectFit: "cover" }}
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Organic Farm Stay</h3>
                  <p className="text-muted-foreground mb-4">Experience sustainable living and farm-to-table dining.</p>
                  <Button variant="outline" size="sm">
                    Book Now
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/placeholder.svg"
                  alt="Eco-Friendly Option 2"
                  width={400}
                  height={300}
                  className="rounded-t-lg object-cover w-full h-48"
                  style={{ aspectRatio: "4 / 3", objectFit: "cover" }}
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Eco-Lodge Retreat</h3>
                  <p className="text-muted-foreground mb-4">
                    Immerse yourself in nature with minimal environmental impact.
                  </p>
                  <Button variant="outline" size="sm">
                    Book Now
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/placeholder.svg"
                  alt="Eco-Friendly Option 3"
                  width={400}
                  height={300}
                  className="rounded-t-lg object-cover w-full h-48"
                  style={{ aspectRatio: "4 / 3", objectFit: "cover" }}
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Sustainable Tours</h3>
                  <p className="text-muted-foreground mb-4">Explore the city with a focus on eco-friendly practices.</p>
                  <Button variant="outline" size="sm">
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20 px-6 md:px-8 lg:px-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">Discover Local Cultural Experiences</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <img
                  src="/placeholder.svg"
                  alt="Cultural Experience 1"
                  width={400}
                  height={300}
                  className="rounded-t-lg object-cover w-full h-48"
                  style={{ aspectRatio: "4 / 3", objectFit: "cover" }}
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Cultural Workshop</h3>
                  <p className="text-muted-foreground mb-4">Learn traditional crafts and skills from local artisans.</p>
                  <Button variant="outline" size="sm">
                    Book Now
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/placeholder.svg"
                  alt="Cultural Experience 2"
                  width={400}
                  height={300}
                  className="rounded-t-lg object-cover w-full h-48"
                  style={{ aspectRatio: "4 / 3", objectFit: "cover" }}
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Heritage Walk</h3>
                  <p className="text-muted-foreground mb-4">Explore historic neighborhoods and learn about local history.</p>
                  <Button variant="outline" size="sm">
                    Book Now
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/placeholder.svg"
                  alt="Cultural Experience 3"
                  width={400}
                  height={300}
                  className="rounded-t-lg object-cover w-full h-48"
                  style={{ aspectRatio: "4 / 3", objectFit: "cover" }}
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Culinary Tour</h3>
                  <p className="text-muted-foreground mb-4">Sample local delicacies and learn about traditional cuisine.</p>
                  <Button variant="outline" size="sm">
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-4 px-6 md:px-8 lg:px-10 text-center">
        <p>&copy; 2024 Explore India. All rights reserved.</p>
      </footer>
    </div>
  );
}
