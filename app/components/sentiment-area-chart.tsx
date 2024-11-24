"use client";
import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis, Tooltip, ResponsiveContainer } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";

// Use the aggregated chartData
const chartData = [
    { month: "2015Q1", other: 0, anime: 0, cybersigilism: 0, blackwork: 8, aesthetic: 0, japanese: 1, portrait: 0, pointillism: 0, mandala: 0, tribal: 0, ignorant: 0, patchwork: 0, illustrative: 45, geometric: 15, minimalist: 0, graffiti: 0, pet: 0, celtic: 0, calligraphy: 3, floral: 0, symbolic: 0, pixel_art: 0, fine_line: 0, realism: 16, traditional: 12, henna: 0, sketch: 0, three_d: 0, abstract: 1, watercolor: 3, typography: 0, trash_polka: 0 },
    { month: "2015Q2", other: 0, anime: 1, cybersigilism: 11, blackwork: 34, aesthetic: 0, japanese: 19, portrait: 0, pointillism: 2, mandala: 0, tribal: 9, ignorant: 0, patchwork: 1, illustrative: 227, geometric: 57, minimalist: 3, graffiti: 0, pet: 0, celtic: 1, calligraphy: 4, floral: 0, symbolic: 0, pixel_art: 0, fine_line: 0, realism: 116, traditional: 82, henna: 0, sketch: 0, three_d: 0, abstract: 5, watercolor: 11, typography: 0, trash_polka: 0 },
    { month: "2015Q3", other: 0, anime: 1, cybersigilism: 15, blackwork: 30, aesthetic: 0, japanese: 17, portrait: 0, pointillism: 11, mandala: 0, tribal: 11, ignorant: 0, patchwork: 0, illustrative: 259, geometric: 74, minimalist: 5, graffiti: 0, pet: 0, celtic: 1, calligraphy: 11, floral: 0, symbolic: 0, pixel_art: 0, fine_line: 0, realism: 119, traditional: 92, henna: 0, sketch: 0, three_d: 0, abstract: 13, watercolor: 10, typography: 0, trash_polka: 1 },
    { month: "2015Q4", other: 0, anime: 1, cybersigilism: 7, blackwork: 26, aesthetic: 0, japanese: 13, portrait: 0, pointillism: 1, mandala: 0, tribal: 4, ignorant: 0, patchwork: 1, illustrative: 214, geometric: 48, minimalist: 6, graffiti: 0, pet: 0, celtic: 0, calligraphy: 3, floral: 0, symbolic: 2, pixel_art: 0, fine_line: 1, realism: 106, traditional: 79, henna: 0, sketch: 0, three_d: 0, abstract: 5, watercolor: 12, typography: 1, trash_polka: 0 },
    { month: "2016Q1", other: 0, anime: 3, cybersigilism: 8, blackwork: 24, aesthetic: 0, japanese: 18, portrait: 0, pointillism: 10, mandala: 1, tribal: 4, ignorant: 0, patchwork: 0, illustrative: 188, geometric: 40, minimalist: 4, graffiti: 0, pet: 0, celtic: 0, calligraphy: 0, floral: 0, symbolic: 0, pixel_art: 0, fine_line: 0, realism: 88, traditional: 80, henna: 0, sketch: 0, three_d: 0, abstract: 8, watercolor: 13, typography: 1, trash_polka: 0 },
    { month: "2016Q2", other: 0, anime: 4, cybersigilism: 6, blackwork: 34, aesthetic: 0, japanese: 13, portrait: 0, pointillism: 6, mandala: 0, tribal: 6, ignorant: 0, patchwork: 2, illustrative: 198, geometric: 52, minimalist: 6, graffiti: 0, pet: 0, celtic: 0, calligraphy: 5, floral: 0, symbolic: 1, pixel_art: 1, fine_line: 0, realism: 105, traditional: 73, henna: 0, sketch: 0, three_d: 0, abstract: 12, watercolor: 11, typography: 0, trash_polka: 3 },
    { month: "2016Q3", other: 0, anime: 0, cybersigilism: 7, blackwork: 26, aesthetic: 0, japanese: 11, portrait: 0, pointillism: 10, mandala: 0, tribal: 4, ignorant: 0, patchwork: 0, illustrative: 200, geometric: 57, minimalist: 3, graffiti: 1, pet: 0, celtic: 0, calligraphy: 5, floral: 0, symbolic: 0, pixel_art: 0, fine_line: 0, realism: 116, traditional: 75, henna: 0, sketch: 0, three_d: 0, abstract: 5, watercolor: 13, typography: 0, trash_polka: 0 },
    { month: "2016Q4", other: 0, anime: 4, cybersigilism: 7, blackwork: 30, aesthetic: 0, japanese: 21, portrait: 1, pointillism: 14, mandala: 0, tribal: 6, ignorant: 0, patchwork: 1, illustrative: 219, geometric: 47, minimalist: 7, graffiti: 0, pet: 0, celtic: 0, calligraphy: 4, floral: 0, symbolic: 0, pixel_art: 0, fine_line: 0, realism: 108, traditional: 68, henna: 0, sketch: 0, three_d: 0, abstract: 9, watercolor: 14, typography: 1, trash_polka: 0 },
    { month: "2017Q1", other: 0, anime: 8, cybersigilism: 7, blackwork: 35, aesthetic: 0, japanese: 16, portrait: 0, pointillism: 15, mandala: 0, tribal: 7, ignorant: 0, patchwork: 0, illustrative: 250, geometric: 56, minimalist: 6, graffiti: 1, pet: 0, celtic: 0, calligraphy: 6, floral: 0, symbolic: 0, pixel_art: 0, fine_line: 2, realism: 114, traditional: 82, henna: 0, sketch: 0, three_d: 0, abstract: 14, watercolor: 17, typography: 0, trash_polka: 0 },
    { month: "2017Q2", other: 0, anime: 3, cybersigilism: 13, blackwork: 32, aesthetic: 0, japanese: 15, portrait: 0, pointillism: 9, mandala: 0, tribal: 9, ignorant: 0, patchwork: 0, illustrative: 220, geometric: 49, minimalist: 9, graffiti: 0, pet: 0, celtic: 0, calligraphy: 2, floral: 0, symbolic: 2, pixel_art: 0, fine_line: 2, realism: 120, traditional: 82, henna: 0, sketch: 0, three_d: 0, abstract: 9, watercolor: 8, typography: 1, trash_polka: 1 },
    { month: "2017Q3", other: 0, anime: 3, cybersigilism: 7, blackwork: 48, aesthetic: 0, japanese: 18, portrait: 0, pointillism: 16, mandala: 4, tribal: 9, ignorant: 0, patchwork: 2, illustrative: 269, geometric: 73, minimalist: 7, graffiti: 0, pet: 0, celtic: 0, calligraphy: 8, floral: 0, symbolic: 1, pixel_art: 0, fine_line: 2, realism: 141, traditional: 97, henna: 0, sketch: 0, three_d: 0, abstract: 17, watercolor: 17, typography: 0, trash_polka: 2 },
    { month: "2017Q4", other: 0, anime: 3, cybersigilism: 6, blackwork: 38, aesthetic: 0, japanese: 20, portrait: 0, pointillism: 15, mandala: 0, tribal: 9, ignorant: 0, patchwork: 0, illustrative: 271, geometric: 55, minimalist: 11, graffiti: 0, pet: 0, celtic: 0, calligraphy: 7, floral: 0, symbolic: 1, pixel_art: 0, fine_line: 5, realism: 123, traditional: 66, henna: 0, sketch: 0, three_d: 0, abstract: 6, watercolor: 16, typography: 0, trash_polka: 1 },
    { month: "2018Q1", other: 0, anime: 8, cybersigilism: 14, blackwork: 69, aesthetic: 0, japanese: 33, portrait: 0, pointillism: 14, mandala: 1, tribal: 7, ignorant: 0, patchwork: 1, illustrative: 294, geometric: 79, minimalist: 14, graffiti: 0, pet: 1, celtic: 0, calligraphy: 11, floral: 0, symbolic: 0, pixel_art: 0, fine_line: 4, realism: 159, traditional: 108, henna: 0, sketch: 1, three_d: 0, abstract: 10, watercolor: 18, typography: 1, trash_polka: 2 },
    { month: "2018Q2", other: 0, anime: 11, cybersigilism: 4, blackwork: 74, aesthetic: 0, japanese: 25, portrait: 0, pointillism: 18, mandala: 1, tribal: 11, ignorant: 0, patchwork: 2, illustrative: 359, geometric: 65, minimalist: 17, graffiti: 1, pet: 0, celtic: 2, calligraphy: 9, floral: 0, symbolic: 1, pixel_art: 0, fine_line: 3, realism: 173, traditional: 146, henna: 0, sketch: 0, three_d: 0, abstract: 9, watercolor: 22, typography: 1, trash_polka: 2 },
    { month: "2018Q3", other: 1, anime: 6, cybersigilism: 17, blackwork: 78, aesthetic: 0, japanese: 32, portrait: 0, pointillism: 16, mandala: 2, tribal: 10, ignorant: 0, patchwork: 2, illustrative: 442, geometric: 97, minimalist: 16, graffiti: 0, pet: 0, celtic: 0, calligraphy: 4, floral: 0, symbolic: 0, pixel_art: 0, fine_line: 1, realism: 237, traditional: 140, henna: 0, sketch: 0, three_d: 0, abstract: 15, watercolor: 25, typography: 0, trash_polka: 5 },
    { month: "2018Q4", other: 0, anime: 13, cybersigilism: 8, blackwork: 61, aesthetic: 0, japanese: 41, portrait: 0, pointillism: 10, mandala: 0, tribal: 9, ignorant: 0, patchwork: 0, illustrative: 330, geometric: 70, minimalist: 5, graffiti: 0, pet: 0, celtic: 0, calligraphy: 3, floral: 0, symbolic: 3, pixel_art: 0, fine_line: 3, realism: 171, traditional: 95, henna: 0, sketch: 1, three_d: 0, abstract: 9, watercolor: 11, typography: 0, trash_polka: 3 },
    { month: "2019Q1", other: 1, anime: 9, cybersigilism: 14, blackwork: 85, aesthetic: 0, japanese: 37, portrait: 0, pointillism: 13, mandala: 1, tribal: 9, ignorant: 0, patchwork: 2, illustrative: 449, geometric: 90, minimalist: 23, graffiti: 0, pet: 0, celtic: 0, calligraphy: 4, floral: 0, symbolic: 2, pixel_art: 0, fine_line: 2, realism: 230, traditional: 113, henna: 0, sketch: 0, three_d: 0, abstract: 11, watercolor: 16, typography: 0, trash_polka: 3 },
    { month: "2019Q2", other: 0, anime: 16, cybersigilism: 20, blackwork: 91, aesthetic: 1, japanese: 53, portrait: 0, pointillism: 26, mandala: 1, tribal: 10, ignorant: 0, patchwork: 3, illustrative: 463, geometric: 87, minimalist: 23, graffiti: 0, pet: 0, celtic: 1, calligraphy: 12, floral: 0, symbolic: 2, pixel_art: 0, fine_line: 4, realism: 253, traditional: 157, henna: 0, sketch: 1, three_d: 0, abstract: 23, watercolor: 16, typography: 0, trash_polka: 5 },
    { month: "2019Q3", other: 0, anime: 14, cybersigilism: 11, blackwork: 119, aesthetic: 0, japanese: 59, portrait: 0, pointillism: 21, mandala: 1, tribal: 16, ignorant: 0, patchwork: 7, illustrative: 545, geometric: 107, minimalist: 22, graffiti: 0, pet: 0, celtic: 1, calligraphy: 9, floral: 0, symbolic: 2, pixel_art: 1, fine_line: 7, realism: 295, traditional: 161, henna: 0, sketch: 0, three_d: 1, abstract: 20, watercolor: 18, typography: 1, trash_polka: 2 },
    { month: "2019Q4", other: 0, anime: 9, cybersigilism: 17, blackwork: 91, aesthetic: 1, japanese: 46, portrait: 0, pointillism: 22, mandala: 0, tribal: 17, ignorant: 0, patchwork: 3, illustrative: 459, geometric: 86, minimalist: 35, graffiti: 0, pet: 0, celtic: 0, calligraphy: 7, floral: 0, symbolic: 1, pixel_art: 0, fine_line: 2, realism: 248, traditional: 120, henna: 0, sketch: 0, three_d: 0, abstract: 18, watercolor: 15, typography: 1, trash_polka: 6 },
    { month: "2020Q1", other: 0, anime: 15, cybersigilism: 21, blackwork: 93, aesthetic: 0, japanese: 50, portrait: 0, pointillism: 22, mandala: 0, tribal: 14, ignorant: 0, patchwork: 6, illustrative: 518, geometric: 72, minimalist: 27, graffiti: 2, pet: 1, celtic: 0, calligraphy: 10, floral: 0, symbolic: 1, pixel_art: 0, fine_line: 10, realism: 277, traditional: 133, henna: 0, sketch: 0, three_d: 0, abstract: 24, watercolor: 14, typography: 0, trash_polka: 1 },
    { month: "2020Q2", other: 0, anime: 2, cybersigilism: 13, blackwork: 78, aesthetic: 0, japanese: 46, portrait: 0, pointillism: 12, mandala: 1, tribal: 14, ignorant: 0, patchwork: 3, illustrative: 261, geometric: 58, minimalist: 11, graffiti: 1, pet: 0, celtic: 0, calligraphy: 3, floral: 0, symbolic: 0, pixel_art: 0, fine_line: 2, realism: 156, traditional: 93, henna: 0, sketch: 0, three_d: 0, abstract: 10, watercolor: 11, typography: 0, trash_polka: 2 },
    { month: "2020Q3", other: 0, anime: 19, cybersigilism: 8, blackwork: 136, aesthetic: 0, japanese: 74, portrait: 0, pointillism: 29, mandala: 1, tribal: 8, ignorant: 0, patchwork: 3, illustrative: 556, geometric: 104, minimalist: 16, graffiti: 0, pet: 0, celtic: 0, calligraphy: 16, floral: 0, symbolic: 1, pixel_art: 1, fine_line: 8, realism: 287, traditional: 159, henna: 0, sketch: 0, three_d: 1, abstract: 23, watercolor: 14, typography: 0, trash_polka: 7 },
    { month: "2020Q4", other: 0, anime: 17, cybersigilism: 20, blackwork: 141, aesthetic: 1, japanese: 75, portrait: 0, pointillism: 34, mandala: 1, tribal: 13, ignorant: 0, patchwork: 6, illustrative: 637, geometric: 87, minimalist: 21, graffiti: 0, pet: 2, celtic: 1, calligraphy: 10, floral: 0, symbolic: 1, pixel_art: 0, fine_line: 6, realism: 314, traditional: 142, henna: 0, sketch: 0, three_d: 0, abstract: 16, watercolor: 17, typography: 0, trash_polka: 11 },
    { month: "2021Q1", other: 0, anime: 11, cybersigilism: 8, blackwork: 149, aesthetic: 0, japanese: 90, portrait: 0, pointillism: 21, mandala: 0, tribal: 34, ignorant: 0, patchwork: 4, illustrative: 666, geometric: 100, minimalist: 13, graffiti: 0, pet: 0, celtic: 0, calligraphy: 4, floral: 0, symbolic: 3, pixel_art: 0, fine_line: 7, realism: 381, traditional: 186, henna: 0, sketch: 0, three_d: 0, abstract: 15, watercolor: 27, typography: 0, trash_polka: 8 },
    { month: "2021Q2", other: 0, anime: 25, cybersigilism: 20, blackwork: 178, aesthetic: 0, japanese: 109, portrait: 0, pointillism: 31, mandala: 1, tribal: 22, ignorant: 0, patchwork: 11, illustrative: 798, geometric: 137, minimalist: 10, graffiti: 0, pet: 0, celtic: 0, calligraphy: 15, floral: 2, symbolic: 2, pixel_art: 0, fine_line: 10, realism: 418, traditional: 198, henna: 0, sketch: 0, three_d: 0, abstract: 38, watercolor: 20, typography: 0, trash_polka: 10 },
    { month: "2021Q3", other: 0, anime: 31, cybersigilism: 39, blackwork: 192, aesthetic: 0, japanese: 118, portrait: 0, pointillism: 20, mandala: 0, tribal: 32, ignorant: 0, patchwork: 21, illustrative: 865, geometric: 166, minimalist: 41, graffiti: 0, pet: 0, celtic: 1, calligraphy: 11, floral: 0, symbolic: 3, pixel_art: 0, fine_line: 11, realism: 491, traditional: 264, henna: 2, sketch: 0, three_d: 0, abstract: 49, watercolor: 26, typography: 0, trash_polka: 10 },
    { month: "2021Q4", other: 1, anime: 21, cybersigilism: 26, blackwork: 182, aesthetic: 0, japanese: 103, portrait: 0, pointillism: 26, mandala: 1, tribal: 46, ignorant: 0, patchwork: 10, illustrative: 863, geometric: 172, minimalist: 19, graffiti: 0, pet: 0, celtic: 0, calligraphy: 14, floral: 0, symbolic: 1, pixel_art: 0, fine_line: 5, realism: 492, traditional: 240, henna: 0, sketch: 0, three_d: 0, abstract: 27, watercolor: 22, typography: 0, trash_polka: 18 },
    { month: "2022Q1", other: 0, anime: 31, cybersigilism: 34, blackwork: 248, aesthetic: 0, japanese: 157, portrait: 0, pointillism: 39, mandala: 0, tribal: 48, ignorant: 0, patchwork: 11, illustrative: 964, geometric: 170, minimalist: 34, graffiti: 0, pet: 0, celtic: 1, calligraphy: 28, floral: 0, symbolic: 5, pixel_art: 0, fine_line: 7, realism: 579, traditional: 292, henna: 1, sketch: 1, three_d: 0, abstract: 55, watercolor: 39, typography: 1, trash_polka: 26 },
    { month: "2022Q2", other: 1, anime: 30, cybersigilism: 43, blackwork: 247, aesthetic: 0, japanese: 138, portrait: 0, pointillism: 37, mandala: 1, tribal: 60, ignorant: 2, patchwork: 9, illustrative: 1106, geometric: 201, minimalist: 36, graffiti: 0, pet: 0, celtic: 0, calligraphy: 17, floral: 0, symbolic: 2, pixel_art: 0, fine_line: 17, realism: 594, traditional: 233, henna: 2, sketch: 0, three_d: 0, abstract: 83, watercolor: 30, typography: 2, trash_polka: 10 },
    { month: "2022Q3", other: 0, anime: 25, cybersigilism: 50, blackwork: 349, aesthetic: 0, japanese: 188, portrait: 0, pointillism: 59, mandala: 2, tribal: 72, ignorant: 0, patchwork: 9, illustrative: 1238, geometric: 258, minimalist: 55, graffiti: 0, pet: 0, celtic: 0, calligraphy: 34, floral: 1, symbolic: 4, pixel_art: 0, fine_line: 32, realism: 783, traditional: 323, henna: 0, sketch: 2, three_d: 0, abstract: 92, watercolor: 33, typography: 0, trash_polka: 23 },
    { month: "2022Q4", other: 1, anime: 49, cybersigilism: 53, blackwork: 403, aesthetic: 3, japanese: 196, portrait: 0, pointillism: 56, mandala: 4, tribal: 70, ignorant: 0, patchwork: 7, illustrative: 1279, geometric: 230, minimalist: 43, graffiti: 1, pet: 0, celtic: 0, calligraphy: 28, floral: 0, symbolic: 1, pixel_art: 0, fine_line: 16, realism: 867, traditional: 409, henna: 0, sketch: 0, three_d: 0, abstract: 70, watercolor: 30, typography: 0, trash_polka: 16 },
    { month: "2023Q1", other: 0, anime: 44, cybersigilism: 57, blackwork: 469, aesthetic: 1, japanese: 219, portrait: 0, pointillism: 49, mandala: 0, tribal: 108, ignorant: 0, patchwork: 15, illustrative: 1536, geometric: 251, minimalist: 61, graffiti: 1, pet: 0, celtic: 0, calligraphy: 37, floral: 0, symbolic: 2, pixel_art: 0, fine_line: 40, realism: 912, traditional: 364, henna: 0, sketch: 0, three_d: 0, abstract: 74, watercolor: 38, typography: 1, trash_polka: 29 },
    { month: "2023Q2", other: 0, anime: 37, cybersigilism: 43, blackwork: 438, aesthetic: 1, japanese: 164, portrait: 0, pointillism: 38, mandala: 1, tribal: 73, ignorant: 0, patchwork: 36, illustrative: 1474, geometric: 290, minimalist: 59, graffiti: 1, pet: 0, celtic: 0, calligraphy: 24, floral: 0, symbolic: 8, pixel_art: 2, fine_line: 22, realism: 868, traditional: 349, henna: 0, sketch: 2, three_d: 0, abstract: 61, watercolor: 48, typography: 0, trash_polka: 32 },
    { month: "2023Q3", other: 0, anime: 35, cybersigilism: 36, blackwork: 459, aesthetic: 1, japanese: 120, portrait: 0, pointillism: 16, mandala: 3, tribal: 110, ignorant: 0, patchwork: 24, illustrative: 1196, geometric: 219, minimalist: 87, graffiti: 0, pet: 0, celtic: 0, calligraphy: 50, floral: 0, symbolic: 4, pixel_art: 0, fine_line: 29, realism: 661, traditional: 250, henna: 0, sketch: 0, three_d: 0, abstract: 76, watercolor: 47, typography: 0, trash_polka: 15 },
    { month: "2023Q4", other: 0, anime: 55, cybersigilism: 64, blackwork: 548, aesthetic: 0, japanese: 223, portrait: 0, pointillism: 73, mandala: 0, tribal: 90, ignorant: 0, patchwork: 23, illustrative: 1558, geometric: 279, minimalist: 71, graffiti: 0, pet: 0, celtic: 0, calligraphy: 37, floral: 0, symbolic: 0, pixel_art: 0, fine_line: 38, realism: 813, traditional: 428, henna: 0, sketch: 1, three_d: 0, abstract: 95, watercolor: 45, typography: 1, trash_polka: 46 },
    { month: "2024Q1", other: 0, anime: 45, cybersigilism: 76, blackwork: 588, aesthetic: 0, japanese: 260, portrait: 0, pointillism: 42, mandala: 0, tribal: 125, ignorant: 0, patchwork: 31, illustrative: 1501, geometric: 370, minimalist: 76, graffiti: 0, pet: 0, celtic: 2, calligraphy: 25, floral: 0, symbolic: 2, pixel_art: 0, fine_line: 39, realism: 923, traditional: 371, henna: 0, sketch: 0, three_d: 0, abstract: 129, watercolor: 35, typography: 1, trash_polka: 22 },
    { month: "2024Q2", other: 0, anime: 49, cybersigilism: 100, blackwork: 611, aesthetic: 0, japanese: 271, portrait: 1, pointillism: 68, mandala: 2, tribal: 157, ignorant: 0, patchwork: 30, illustrative: 1913, geometric: 377, minimalist: 87, graffiti: 2, pet: 0, celtic: 0, calligraphy: 36, floral: 0, symbolic: 2, pixel_art: 1, fine_line: 40, realism: 1055, traditional: 472, henna: 0, sketch: 3, three_d: 0, abstract: 117, watercolor: 60, typography: 2, trash_polka: 56 },
    { month: "2024Q3", other: 0, anime: 56, cybersigilism: 64, blackwork: 824, aesthetic: 4, japanese: 387, portrait: 0, pointillism: 62, mandala: 2, tribal: 205, ignorant: 0, patchwork: 46, illustrative: 2463, geometric: 479, minimalist: 105, graffiti: 0, pet: 0, celtic: 1, calligraphy: 54, floral: 0, symbolic: 7, pixel_art: 1, fine_line: 66, realism: 1331, traditional: 599, henna: 0, sketch: 2, three_d: 0, abstract: 130, watercolor: 65, typography: 1, trash_polka: 29 },
    { month: "2024Q4", other: 3, anime: 11, cybersigilism: 39, blackwork: 410, aesthetic: 0, japanese: 141, portrait: 0, pointillism: 25, mandala: 0, tribal: 95, ignorant: 0, patchwork: 33, illustrative: 939, geometric: 163, minimalist: 42, graffiti: 0, pet: 0, celtic: 0, calligraphy: 39, floral: 2, symbolic: 0, pixel_art: 8, fine_line: 28, realism: 598, traditional: 291, henna: 0, sketch: 2, three_d: 0, abstract: 73, watercolor: 43, typography: 0, trash_polka: 13 },
  ];

// Define chart configurations for each tattoo style
const chartConfig: ChartConfig = {
    anime: {
      label: "Anime",
      color: "hsl(210, 100%, 50%)", // Customize colors as needed
    },
    blackwork: {
      label: "Blackwork",
      color: "hsl(0, 0%, 0%)",
    },
    calligraphy: {
      label: "Calligraphy",
      color: "hsl(120, 100%, 25%)",
    },
    cybersigilism: {
      label: "Cybersigilism",
      color: "hsl(300, 100%, 40%)",
    },
    illustrative: {
      label: "Illustrative",

      color: "hsl(var(--chart-1))",
    },
    minimalist: {
      label: "Minimalist",
      color: "hsl(180, 100%, 30%)",
    },
    realism: {
      label: "Realism",
      color: "hsl(var(--chart-2))",
    },
    traditional: {
      label: "Traditional",
      color: "hsl(330, 100%, 40%)",
    },
    "trash_polka": {
      label: "trash_polka",
      color: "hsl(330, 100%, 40%)",
    },
  };
  
  export default function TattooStylesAreaChart() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Tattoo Styles Trends</CardTitle>
          <CardDescription>
            Showing total counts for various tattoo styles per quarter
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart
                data={chartData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value}
                />
                <Tooltip content={<ChartTooltipContent />} />
                <defs>
                  {Object.entries(chartConfig).map(([key, config]) => (
                    <linearGradient key={key} id={`fill${key}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={config.color} stopOpacity={0.8} />
                      <stop offset="95%" stopColor={config.color} stopOpacity={0.1} />
                    </linearGradient>
                  ))}
                </defs>
                {Object.keys(chartConfig).map((key) => (
                  <Area
                    key={key}
                    type="monotone"
                    dataKey={key}
                    stroke={chartConfig[key].color}
                    fillOpacity={1}
                    fill={`url(#fill${key})`}
                  />
                ))}
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
        <CardFooter>
          <div className="flex w-full items-start gap-2 text-sm">
            <div className="grid gap-2">
              <div className="flex items-center gap-2 font-medium leading-none">
                Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
              </div>
              <div className="flex items-center gap-2 leading-none text-muted-foreground">
                2014Q2 - 2024Q11
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    );
  }