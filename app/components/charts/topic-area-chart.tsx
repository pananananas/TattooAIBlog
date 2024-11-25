"use client";
import { TrendingUp } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";

export const chartData = [
  {
    month: "2015-03",
    pejzażyste_kwiaty_i_liście: 0.0,
    nieustraszone_tygrysy: 0.0,
    kotki_w_chwilach_relaksu: 0.0,
    wilki_wyjące_w_dziczy: 2.0,
    motyle_z_rozłożonymi_skrzydłami: 2.0,
  },
  {
    month: "2015-04",
    pejzażyste_kwiaty_i_liście: 1.0,
    nieustraszone_tygrysy: 1.0,
    kotki_w_chwilach_relaksu: 2.5,
    wilki_wyjące_w_dziczy: 2.5,
    motyle_z_rozłożonymi_skrzydłami: 1.0,
  },
  {
    month: "2015-05",
    pejzażyste_kwiaty_i_liście: 1.5,
    nieustraszone_tygrysy: 1.5,
    kotki_w_chwilach_relaksu: 4.0,
    wilki_wyjące_w_dziczy: 2.5,
    motyle_z_rozłożonymi_skrzydłami: 0.5,
  },
  {
    month: "2015-06",
    pejzażyste_kwiaty_i_liście: 1.0,
    nieustraszone_tygrysy: 2.0,
    kotki_w_chwilach_relaksu: 2.0,
    wilki_wyjące_w_dziczy: 1.5,
    motyle_z_rozłożonymi_skrzydłami: 1.0,
  },
  {
    month: "2015-07",
    pejzażyste_kwiaty_i_liście: 0.5,
    nieustraszone_tygrysy: 2.5,
    kotki_w_chwilach_relaksu: 3.5,
    wilki_wyjące_w_dziczy: 4.0,
    motyle_z_rozłożonymi_skrzydłami: 1.0,
  },
  {
    month: "2015-08",
    pejzażyste_kwiaty_i_liście: 0.5,
    nieustraszone_tygrysy: 2.0,
    kotki_w_chwilach_relaksu: 3.5,
    wilki_wyjące_w_dziczy: 6.5,
    motyle_z_rozłożonymi_skrzydłami: 1.0,
  },
  {
    month: "2015-09",
    pejzażyste_kwiaty_i_liście: 1.0,
    nieustraszone_tygrysy: 1.5,
    kotki_w_chwilach_relaksu: 2.0,
    wilki_wyjące_w_dziczy: 4.5,
    motyle_z_rozłożonymi_skrzydłami: 1.0,
  },
  {
    month: "2015-10",
    pejzażyste_kwiaty_i_liście: 0.5,
    nieustraszone_tygrysy: 1.0,
    kotki_w_chwilach_relaksu: 4.0,
    wilki_wyjące_w_dziczy: 3.0,
    motyle_z_rozłożonymi_skrzydłami: 1.0,
  },
  {
    month: "2015-11",
    pejzażyste_kwiaty_i_liście: 0.0,
    nieustraszone_tygrysy: 0.5,
    kotki_w_chwilach_relaksu: 4.5,
    wilki_wyjące_w_dziczy: 2.0,
    motyle_z_rozłożonymi_skrzydłami: 0.5,
  },
  {
    month: "2015-12",
    pejzażyste_kwiaty_i_liście: 0.0,
    nieustraszone_tygrysy: 0.5,
    kotki_w_chwilach_relaksu: 3.5,
    wilki_wyjące_w_dziczy: 1.0,
    motyle_z_rozłożonymi_skrzydłami: 0.0,
  },
  {
    month: "2016-01",
    pejzażyste_kwiaty_i_liście: 1.0,
    nieustraszone_tygrysy: 1.5,
    kotki_w_chwilach_relaksu: 3.0,
    wilki_wyjące_w_dziczy: 2.5,
    motyle_z_rozłożonymi_skrzydłami: 0.5,
  },
  {
    month: "2016-02",
    pejzażyste_kwiaty_i_liście: 1.0,
    nieustraszone_tygrysy: 1.0,
    kotki_w_chwilach_relaksu: 2.0,
    wilki_wyjące_w_dziczy: 2.0,
    motyle_z_rozłożonymi_skrzydłami: 0.5,
  },
  {
    month: "2016-03",
    pejzażyste_kwiaty_i_liście: 0.0,
    nieustraszone_tygrysy: 0.0,
    kotki_w_chwilach_relaksu: 1.0,
    wilki_wyjące_w_dziczy: 1.5,
    motyle_z_rozłożonymi_skrzydłami: 0.5,
  },
  {
    month: "2016-04",
    pejzażyste_kwiaty_i_liście: 0.0,
    nieustraszone_tygrysy: 0.5,
    kotki_w_chwilach_relaksu: 2.5,
    wilki_wyjące_w_dziczy: 4.5,
    motyle_z_rozłożonymi_skrzydłami: 0.5,
  },
  {
    month: "2016-05",
    pejzażyste_kwiaty_i_liście: 1.0,
    nieustraszone_tygrysy: 1.0,
    kotki_w_chwilach_relaksu: 4.0,
    wilki_wyjące_w_dziczy: 6.0,
    motyle_z_rozłożonymi_skrzydłami: 1.5,
  },
  {
    month: "2016-06",
    pejzażyste_kwiaty_i_liście: 2.5,
    nieustraszone_tygrysy: 1.5,
    kotki_w_chwilach_relaksu: 4.0,
    wilki_wyjące_w_dziczy: 4.5,
    motyle_z_rozłożonymi_skrzydłami: 2.0,
  },
  {
    month: "2016-07",
    pejzażyste_kwiaty_i_liście: 2.0,
    nieustraszone_tygrysy: 1.0,
    kotki_w_chwilach_relaksu: 4.0,
    wilki_wyjące_w_dziczy: 2.5,
    motyle_z_rozłożonymi_skrzydłami: 1.0,
  },
  {
    month: "2016-08",
    pejzażyste_kwiaty_i_liście: 0.5,
    nieustraszone_tygrysy: 0.0,
    kotki_w_chwilach_relaksu: 2.5,
    wilki_wyjące_w_dziczy: 3.0,
    motyle_z_rozłożonymi_skrzydłami: 1.0,
  },
  {
    month: "2016-09",
    pejzażyste_kwiaty_i_liście: 1.5,
    nieustraszone_tygrysy: 0.5,
    kotki_w_chwilach_relaksu: 2.0,
    wilki_wyjące_w_dziczy: 4.5,
    motyle_z_rozłożonymi_skrzydłami: 0.5,
  },
  {
    month: "2016-10",
    pejzażyste_kwiaty_i_liście: 2.0,
    nieustraszone_tygrysy: 1.5,
    kotki_w_chwilach_relaksu: 3.5,
    wilki_wyjące_w_dziczy: 4.5,
    motyle_z_rozłożonymi_skrzydłami: 0.5,
  },
  {
    month: "2016-11",
    pejzażyste_kwiaty_i_liście: 1.0,
    nieustraszone_tygrysy: 1.0,
    kotki_w_chwilach_relaksu: 4.5,
    wilki_wyjące_w_dziczy: 4.0,
    motyle_z_rozłożonymi_skrzydłami: 0.5,
  },
  {
    month: "2016-12",
    pejzażyste_kwiaty_i_liście: 0.5,
    nieustraszone_tygrysy: 0.5,
    kotki_w_chwilach_relaksu: 3.5,
    wilki_wyjące_w_dziczy: 3.5,
    motyle_z_rozłożonymi_skrzydłami: 1.0,
  },
  {
    month: "2017-01",
    pejzażyste_kwiaty_i_liście: 2.0,
    nieustraszone_tygrysy: 1.5,
    kotki_w_chwilach_relaksu: 4.5,
    wilki_wyjące_w_dziczy: 4.5,
    motyle_z_rozłożonymi_skrzydłami: 2.0,
  },
  {
    month: "2017-02",
    pejzażyste_kwiaty_i_liście: 2.0,
    nieustraszone_tygrysy: 1.0,
    kotki_w_chwilach_relaksu: 4.5,
    wilki_wyjące_w_dziczy: 6.0,
    motyle_z_rozłożonymi_skrzydłami: 1.5,
  },
  {
    month: "2017-03",
    pejzażyste_kwiaty_i_liście: 1.0,
    nieustraszone_tygrysy: 0.5,
    kotki_w_chwilach_relaksu: 3.0,
    wilki_wyjące_w_dziczy: 5.5,
    motyle_z_rozłożonymi_skrzydłami: 0.5,
  },
  {
    month: "2017-04",
    pejzażyste_kwiaty_i_liście: 2.0,
    nieustraszone_tygrysy: 2.0,
    kotki_w_chwilach_relaksu: 3.5,
    wilki_wyjące_w_dziczy: 4.0,
    motyle_z_rozłożonymi_skrzydłami: 0.0,
  },
  {
    month: "2017-05",
    pejzażyste_kwiaty_i_liście: 2.5,
    nieustraszone_tygrysy: 1.5,
    kotki_w_chwilach_relaksu: 2.5,
    wilki_wyjące_w_dziczy: 3.5,
    motyle_z_rozłożonymi_skrzydłami: 1.0,
  },
  {
    month: "2017-06",
    pejzażyste_kwiaty_i_liście: 2.0,
    nieustraszone_tygrysy: 0.5,
    kotki_w_chwilach_relaksu: 2.0,
    wilki_wyjące_w_dziczy: 4.0,
    motyle_z_rozłożonymi_skrzydłami: 1.5,
  },
  {
    month: "2017-07",
    pejzażyste_kwiaty_i_liście: 0.5,
    nieustraszone_tygrysy: 1.5,
    kotki_w_chwilach_relaksu: 4.0,
    wilki_wyjące_w_dziczy: 4.0,
    motyle_z_rozłożonymi_skrzydłami: 1.0,
  },
  {
    month: "2017-08",
    pejzażyste_kwiaty_i_liście: 0.5,
    nieustraszone_tygrysy: 1.0,
    kotki_w_chwilach_relaksu: 6.0,
    wilki_wyjące_w_dziczy: 5.0,
    motyle_z_rozłożonymi_skrzydłami: 0.5,
  },
  {
    month: "2017-09",
    pejzażyste_kwiaty_i_liście: 2.0,
    nieustraszone_tygrysy: 1.0,
    kotki_w_chwilach_relaksu: 5.0,
    wilki_wyjące_w_dziczy: 6.5,
    motyle_z_rozłożonymi_skrzydłami: 0.5,
  },
  {
    month: "2017-10",
    pejzażyste_kwiaty_i_liście: 2.0,
    nieustraszone_tygrysy: 2.0,
    kotki_w_chwilach_relaksu: 6.0,
    wilki_wyjące_w_dziczy: 5.5,
    motyle_z_rozłożonymi_skrzydłami: 0.5,
  },
  {
    month: "2017-11",
    pejzażyste_kwiaty_i_liście: 0.5,
    nieustraszone_tygrysy: 2.0,
    kotki_w_chwilach_relaksu: 5.5,
    wilki_wyjące_w_dziczy: 3.0,
    motyle_z_rozłożonymi_skrzydłami: 0.0,
  },
  {
    month: "2017-12",
    pejzażyste_kwiaty_i_liście: 0.5,
    nieustraszone_tygrysy: 1.0,
    kotki_w_chwilach_relaksu: 5.0,
    wilki_wyjące_w_dziczy: 2.0,
    motyle_z_rozłożonymi_skrzydłami: 0.5,
  },
  {
    month: "2018-01",
    pejzażyste_kwiaty_i_liście: 1.5,
    nieustraszone_tygrysy: 1.5,
    kotki_w_chwilach_relaksu: 4.5,
    wilki_wyjące_w_dziczy: 3.5,
    motyle_z_rozłożonymi_skrzydłami: 0.5,
  },
  {
    month: "2018-02",
    pejzażyste_kwiaty_i_liście: 2.0,
    nieustraszone_tygrysy: 3.0,
    kotki_w_chwilach_relaksu: 5.5,
    wilki_wyjące_w_dziczy: 6.0,
    motyle_z_rozłożonymi_skrzydłami: 0.0,
  },
  {
    month: "2018-03",
    pejzażyste_kwiaty_i_liście: 2.0,
    nieustraszone_tygrysy: 1.5,
    kotki_w_chwilach_relaksu: 8.5,
    wilki_wyjące_w_dziczy: 7.5,
    motyle_z_rozłożonymi_skrzydłami: 0.5,
  },
  {
    month: "2018-04",
    pejzażyste_kwiaty_i_liście: 2.0,
    nieustraszone_tygrysy: 1.0,
    kotki_w_chwilach_relaksu: 8.0,
    wilki_wyjące_w_dziczy: 8.5,
    motyle_z_rozłożonymi_skrzydłami: 1.0,
  },
  {
    month: "2018-05",
    pejzażyste_kwiaty_i_liście: 2.0,
    nieustraszone_tygrysy: 1.5,
    kotki_w_chwilach_relaksu: 7.0,
    wilki_wyjące_w_dziczy: 7.5,
    motyle_z_rozłożonymi_skrzydłami: 1.0,
  },
  {
    month: "2018-06",
    pejzażyste_kwiaty_i_liście: 2.5,
    nieustraszone_tygrysy: 2.5,
    kotki_w_chwilach_relaksu: 6.0,
    wilki_wyjące_w_dziczy: 5.0,
    motyle_z_rozłożonymi_skrzydłami: 0.5,
  },
  {
    month: "2018-07",
    pejzażyste_kwiaty_i_liście: 2.0,
    nieustraszone_tygrysy: 3.0,
    kotki_w_chwilach_relaksu: 7.5,
    wilki_wyjące_w_dziczy: 5.5,
    motyle_z_rozłożonymi_skrzydłami: 1.0,
  },
  {
    month: "2018-08",
    pejzażyste_kwiaty_i_liście: 4.0,
    nieustraszone_tygrysy: 3.0,
    kotki_w_chwilach_relaksu: 7.0,
    wilki_wyjące_w_dziczy: 7.0,
    motyle_z_rozłożonymi_skrzydłami: 2.0,
  },
  {
    month: "2018-09",
    pejzażyste_kwiaty_i_liście: 5.0,
    nieustraszone_tygrysy: 4.5,
    kotki_w_chwilach_relaksu: 8.5,
    wilki_wyjące_w_dziczy: 5.0,
    motyle_z_rozłożonymi_skrzydłami: 1.5,
  },
  {
    month: "2018-10",
    pejzażyste_kwiaty_i_liście: 3.0,
    nieustraszone_tygrysy: 3.5,
    kotki_w_chwilach_relaksu: 9.0,
    wilki_wyjące_w_dziczy: 5.5,
    motyle_z_rozłożonymi_skrzydłami: 1.0,
  },
  {
    month: "2018-11",
    pejzażyste_kwiaty_i_liście: 2.0,
    nieustraszone_tygrysy: 2.5,
    kotki_w_chwilach_relaksu: 7.0,
    wilki_wyjące_w_dziczy: 7.0,
    motyle_z_rozłożonymi_skrzydłami: 0.5,
  },
  {
    month: "2018-12",
    pejzażyste_kwiaty_i_liście: 1.0,
    nieustraszone_tygrysy: 4.0,
    kotki_w_chwilach_relaksu: 5.5,
    wilki_wyjące_w_dziczy: 4.5,
    motyle_z_rozłożonymi_skrzydłami: 0.5,
  },
  {
    month: "2019-01",
    pejzażyste_kwiaty_i_liście: 2.0,
    nieustraszone_tygrysy: 3.5,
    kotki_w_chwilach_relaksu: 5.5,
    wilki_wyjące_w_dziczy: 4.5,
    motyle_z_rozłożonymi_skrzydłami: 1.5,
  },
  {
    month: "2019-02",
    pejzażyste_kwiaty_i_liście: 3.0,
    nieustraszone_tygrysy: 1.5,
    kotki_w_chwilach_relaksu: 7.0,
    wilki_wyjące_w_dziczy: 3.5,
    motyle_z_rozłożonymi_skrzydłami: 1.0,
  },
  {
    month: "2019-03",
    pejzażyste_kwiaty_i_liście: 3.5,
    nieustraszone_tygrysy: 1.0,
    kotki_w_chwilach_relaksu: 7.5,
    wilki_wyjące_w_dziczy: 2.5,
    motyle_z_rozłożonymi_skrzydłami: 1.5,
  },
  {
    month: "2019-04",
    pejzażyste_kwiaty_i_liście: 3.0,
    nieustraszone_tygrysy: 1.0,
    kotki_w_chwilach_relaksu: 9.0,
    wilki_wyjące_w_dziczy: 7.0,
    motyle_z_rozłożonymi_skrzydłami: 2.0,
  },
  {
    month: "2019-05",
    pejzażyste_kwiaty_i_liście: 1.0,
    nieustraszone_tygrysy: 3.5,
    kotki_w_chwilach_relaksu: 11.0,
    wilki_wyjące_w_dziczy: 9.5,
    motyle_z_rozłożonymi_skrzydłami: 1.0,
  },
  {
    month: "2019-06",
    pejzażyste_kwiaty_i_liście: 2.0,
    nieustraszone_tygrysy: 4.5,
    kotki_w_chwilach_relaksu: 11.5,
    wilki_wyjące_w_dziczy: 9.0,
    motyle_z_rozłożonymi_skrzydłami: 2.0,
  },
  {
    month: "2019-07",
    pejzażyste_kwiaty_i_liście: 4.0,
    nieustraszone_tygrysy: 3.0,
    kotki_w_chwilach_relaksu: 7.5,
    wilki_wyjące_w_dziczy: 12.5,
    motyle_z_rozłożonymi_skrzydłami: 2.0,
  },
  {
    month: "2019-08",
    pejzażyste_kwiaty_i_liście: 4.5,
    nieustraszone_tygrysy: 5.0,
    kotki_w_chwilach_relaksu: 10.0,
    wilki_wyjące_w_dziczy: 11.5,
    motyle_z_rozłożonymi_skrzydłami: 1.0,
  },
  {
    month: "2019-09",
    pejzażyste_kwiaty_i_liście: 4.5,
    nieustraszone_tygrysy: 4.5,
    kotki_w_chwilach_relaksu: 15.0,
    wilki_wyjące_w_dziczy: 5.5,
    motyle_z_rozłożonymi_skrzydłami: 0.5,
  },
  {
    month: "2019-10",
    pejzażyste_kwiaty_i_liście: 3.0,
    nieustraszone_tygrysy: 3.0,
    kotki_w_chwilach_relaksu: 11.0,
    wilki_wyjące_w_dziczy: 5.5,
    motyle_z_rozłożonymi_skrzydłami: 0.5,
  },
  {
    month: "2019-11",
    pejzażyste_kwiaty_i_liście: 2.0,
    nieustraszone_tygrysy: 3.5,
    kotki_w_chwilach_relaksu: 7.5,
    wilki_wyjące_w_dziczy: 5.5,
    motyle_z_rozłożonymi_skrzydłami: 2.0,
  },
  {
    month: "2019-12",
    pejzażyste_kwiaty_i_liście: 3.5,
    nieustraszone_tygrysy: 2.5,
    kotki_w_chwilach_relaksu: 8.5,
    wilki_wyjące_w_dziczy: 3.5,
    motyle_z_rozłożonymi_skrzydłami: 2.0,
  },
  {
    month: "2020-01",
    pejzażyste_kwiaty_i_liście: 4.0,
    nieustraszone_tygrysy: 3.0,
    kotki_w_chwilach_relaksu: 8.0,
    wilki_wyjące_w_dziczy: 4.0,
    motyle_z_rozłożonymi_skrzydłami: 3.5,
  },
  {
    month: "2020-02",
    pejzażyste_kwiaty_i_liście: 3.5,
    nieustraszone_tygrysy: 2.0,
    kotki_w_chwilach_relaksu: 7.5,
    wilki_wyjące_w_dziczy: 7.0,
    motyle_z_rozłożonymi_skrzydłami: 3.0,
  },
  {
    month: "2020-03",
    pejzażyste_kwiaty_i_liście: 5.0,
    nieustraszone_tygrysy: 4.5,
    kotki_w_chwilach_relaksu: 9.0,
    wilki_wyjące_w_dziczy: 7.5,
    motyle_z_rozłożonymi_skrzydłami: 2.5,
  },
  {
    month: "2020-04",
    pejzażyste_kwiaty_i_liście: 4.0,
    nieustraszone_tygrysy: 4.5,
    kotki_w_chwilach_relaksu: 6.5,
    wilki_wyjące_w_dziczy: 5.0,
    motyle_z_rozłożonymi_skrzydłami: 3.0,
  },
  {
    month: "2020-05",
    pejzażyste_kwiaty_i_liście: 1.5,
    nieustraszone_tygrysy: 0.5,
    kotki_w_chwilach_relaksu: 2.5,
    wilki_wyjące_w_dziczy: 3.0,
    motyle_z_rozłożonymi_skrzydłami: 0.5,
  },
  {
    month: "2020-06",
    pejzażyste_kwiaty_i_liście: 1.5,
    nieustraszone_tygrysy: 1.5,
    kotki_w_chwilach_relaksu: 3.0,
    wilki_wyjące_w_dziczy: 3.0,
    motyle_z_rozłożonymi_skrzydłami: 2.0,
  },
  {
    month: "2020-07",
    pejzażyste_kwiaty_i_liście: 3.5,
    nieustraszone_tygrysy: 2.0,
    kotki_w_chwilach_relaksu: 4.5,
    wilki_wyjące_w_dziczy: 6.0,
    motyle_z_rozłożonymi_skrzydłami: 4.0,
  },
  {
    month: "2020-08",
    pejzażyste_kwiaty_i_liście: 6.0,
    nieustraszone_tygrysy: 1.5,
    kotki_w_chwilach_relaksu: 6.5,
    wilki_wyjące_w_dziczy: 6.0,
    motyle_z_rozłożonymi_skrzydłami: 4.0,
  },
  {
    month: "2020-09",
    pejzażyste_kwiaty_i_liście: 5.5,
    nieustraszone_tygrysy: 2.5,
    kotki_w_chwilach_relaksu: 6.0,
    wilki_wyjące_w_dziczy: 3.5,
    motyle_z_rozłożonymi_skrzydłami: 4.0,
  },
  {
    month: "2020-10",
    pejzażyste_kwiaty_i_liście: 4.0,
    nieustraszone_tygrysy: 5.5,
    kotki_w_chwilach_relaksu: 4.5,
    wilki_wyjące_w_dziczy: 4.0,
    motyle_z_rozłożonymi_skrzydłami: 3.0,
  },
  {
    month: "2020-11",
    pejzażyste_kwiaty_i_liście: 3.5,
    nieustraszone_tygrysy: 5.5,
    kotki_w_chwilach_relaksu: 10.0,
    wilki_wyjące_w_dziczy: 4.5,
    motyle_z_rozłożonymi_skrzydłami: 3.5,
  },
  {
    month: "2020-12",
    pejzażyste_kwiaty_i_liście: 3.5,
    nieustraszone_tygrysy: 2.5,
    kotki_w_chwilach_relaksu: 9.5,
    wilki_wyjące_w_dziczy: 5.0,
    motyle_z_rozłożonymi_skrzydłami: 4.5,
  },
  {
    month: "2021-01",
    pejzażyste_kwiaty_i_liście: 4.5,
    nieustraszone_tygrysy: 2.0,
    kotki_w_chwilach_relaksu: 7.0,
    wilki_wyjące_w_dziczy: 4.5,
    motyle_z_rozłożonymi_skrzydłami: 4.5,
  },
  {
    month: "2021-02",
    pejzażyste_kwiaty_i_liście: 5.0,
    nieustraszone_tygrysy: 3.0,
    kotki_w_chwilach_relaksu: 10.5,
    wilki_wyjące_w_dziczy: 5.5,
    motyle_z_rozłożonymi_skrzydłami: 3.0,
  },
  {
    month: "2021-03",
    pejzażyste_kwiaty_i_liście: 5.0,
    nieustraszone_tygrysy: 5.0,
    kotki_w_chwilach_relaksu: 11.0,
    wilki_wyjące_w_dziczy: 8.0,
    motyle_z_rozłożonymi_skrzydłami: 2.0,
  },
  {
    month: "2021-04",
    pejzażyste_kwiaty_i_liście: 4.0,
    nieustraszone_tygrysy: 4.5,
    kotki_w_chwilach_relaksu: 12.0,
    wilki_wyjące_w_dziczy: 8.5,
    motyle_z_rozłożonymi_skrzydłami: 3.5,
  },
  {
    month: "2021-05",
    pejzażyste_kwiaty_i_liście: 3.5,
    nieustraszone_tygrysy: 4.5,
    kotki_w_chwilach_relaksu: 13.0,
    wilki_wyjące_w_dziczy: 8.5,
    motyle_z_rozłożonymi_skrzydłami: 5.0,
  },
  {
    month: "2021-06",
    pejzażyste_kwiaty_i_liście: 3.5,
    nieustraszone_tygrysy: 4.0,
    kotki_w_chwilach_relaksu: 12.0,
    wilki_wyjące_w_dziczy: 6.0,
    motyle_z_rozłożonymi_skrzydłami: 5.5,
  },
  {
    month: "2021-07",
    pejzażyste_kwiaty_i_liście: 5.5,
    nieustraszone_tygrysy: 2.5,
    kotki_w_chwilach_relaksu: 16.0,
    wilki_wyjące_w_dziczy: 5.0,
    motyle_z_rozłożonymi_skrzydłami: 4.0,
  },
  {
    month: "2021-08",
    pejzażyste_kwiaty_i_liście: 5.5,
    nieustraszone_tygrysy: 4.0,
    kotki_w_chwilach_relaksu: 15.5,
    wilki_wyjące_w_dziczy: 4.5,
    motyle_z_rozłożonymi_skrzydłami: 6.5,
  },
  {
    month: "2021-09",
    pejzażyste_kwiaty_i_liście: 3.0,
    nieustraszone_tygrysy: 4.5,
    kotki_w_chwilach_relaksu: 11.0,
    wilki_wyjące_w_dziczy: 3.5,
    motyle_z_rozłożonymi_skrzydłami: 8.0,
  },
  {
    month: "2021-10",
    pejzażyste_kwiaty_i_liście: 5.0,
    nieustraszone_tygrysy: 3.0,
    kotki_w_chwilach_relaksu: 11.0,
    wilki_wyjące_w_dziczy: 5.0,
    motyle_z_rozłożonymi_skrzydłami: 6.0,
  },
  {
    month: "2021-11",
    pejzażyste_kwiaty_i_liście: 4.0,
    nieustraszone_tygrysy: 3.5,
    kotki_w_chwilach_relaksu: 12.5,
    wilki_wyjące_w_dziczy: 6.5,
    motyle_z_rozłożonymi_skrzydłami: 5.5,
  },
  {
    month: "2021-12",
    pejzażyste_kwiaty_i_liście: 3.0,
    nieustraszone_tygrysy: 4.5,
    kotki_w_chwilach_relaksu: 12.5,
    wilki_wyjące_w_dziczy: 6.0,
    motyle_z_rozłożonymi_skrzydłami: 6.0,
  },
  {
    month: "2022-01",
    pejzażyste_kwiaty_i_liście: 5.0,
    nieustraszone_tygrysy: 3.5,
    kotki_w_chwilach_relaksu: 13.0,
    wilki_wyjące_w_dziczy: 5.0,
    motyle_z_rozłożonymi_skrzydłami: 8.5,
  },
  {
    month: "2022-02",
    pejzażyste_kwiaty_i_liście: 6.0,
    nieustraszone_tygrysy: 5.0,
    kotki_w_chwilach_relaksu: 13.5,
    wilki_wyjące_w_dziczy: 5.0,
    motyle_z_rozłożonymi_skrzydłami: 9.0,
  },
  {
    month: "2022-03",
    pejzażyste_kwiaty_i_liście: 7.5,
    nieustraszone_tygrysy: 5.5,
    kotki_w_chwilach_relaksu: 12.5,
    wilki_wyjące_w_dziczy: 4.5,
    motyle_z_rozłożonymi_skrzydłami: 10.5,
  },
  {
    month: "2022-04",
    pejzażyste_kwiaty_i_liście: 9.5,
    nieustraszone_tygrysy: 5.0,
    kotki_w_chwilach_relaksu: 12.0,
    wilki_wyjące_w_dziczy: 8.0,
    motyle_z_rozłożonymi_skrzydłami: 10.0,
  },
  {
    month: "2022-05",
    pejzażyste_kwiaty_i_liście: 9.5,
    nieustraszone_tygrysy: 4.5,
    kotki_w_chwilach_relaksu: 14.5,
    wilki_wyjące_w_dziczy: 9.0,
    motyle_z_rozłożonymi_skrzydłami: 6.0,
  },
  {
    month: "2022-06",
    pejzażyste_kwiaty_i_liście: 8.0,
    nieustraszone_tygrysy: 3.5,
    kotki_w_chwilach_relaksu: 19.0,
    wilki_wyjące_w_dziczy: 5.0,
    motyle_z_rozłożonymi_skrzydłami: 8.5,
  },
  {
    month: "2022-07",
    pejzażyste_kwiaty_i_liście: 9.0,
    nieustraszone_tygrysy: 6.0,
    kotki_w_chwilach_relaksu: 17.5,
    wilki_wyjące_w_dziczy: 5.5,
    motyle_z_rozłożonymi_skrzydłami: 14.5,
  },
  {
    month: "2022-08",
    pejzażyste_kwiaty_i_liście: 8.0,
    nieustraszone_tygrysy: 6.5,
    kotki_w_chwilach_relaksu: 15.5,
    wilki_wyjące_w_dziczy: 8.0,
    motyle_z_rozłożonymi_skrzydłami: 15.0,
  },
  {
    month: "2022-09",
    pejzażyste_kwiaty_i_liście: 6.5,
    nieustraszone_tygrysy: 4.5,
    kotki_w_chwilach_relaksu: 16.5,
    wilki_wyjące_w_dziczy: 9.0,
    motyle_z_rozłożonymi_skrzydłami: 11.5,
  },
  {
    month: "2022-10",
    pejzażyste_kwiaty_i_liście: 6.5,
    nieustraszone_tygrysy: 6.0,
    kotki_w_chwilach_relaksu: 15.0,
    wilki_wyjące_w_dziczy: 7.0,
    motyle_z_rozłożonymi_skrzydłami: 9.0,
  },
  {
    month: "2022-11",
    pejzażyste_kwiaty_i_liście: 6.0,
    nieustraszone_tygrysy: 9.5,
    kotki_w_chwilach_relaksu: 14.5,
    wilki_wyjące_w_dziczy: 5.0,
    motyle_z_rozłożonymi_skrzydłami: 10.0,
  },
  {
    month: "2022-12",
    pejzażyste_kwiaty_i_liście: 4.5,
    nieustraszone_tygrysy: 11.0,
    kotki_w_chwilach_relaksu: 17.0,
    wilki_wyjące_w_dziczy: 11.0,
    motyle_z_rozłożonymi_skrzydłami: 11.5,
  },
  {
    month: "2023-01",
    pejzażyste_kwiaty_i_liście: 4.5,
    nieustraszone_tygrysy: 12.5,
    kotki_w_chwilach_relaksu: 20.5,
    wilki_wyjące_w_dziczy: 15.5,
    motyle_z_rozłożonymi_skrzydłami: 13.0,
  },
  {
    month: "2023-02",
    pejzażyste_kwiaty_i_liście: 9.5,
    nieustraszone_tygrysy: 12.0,
    kotki_w_chwilach_relaksu: 21.5,
    wilki_wyjące_w_dziczy: 11.0,
    motyle_z_rozłożonymi_skrzydłami: 15.0,
  },
  {
    month: "2023-03",
    pejzażyste_kwiaty_i_liście: 10.0,
    nieustraszone_tygrysy: 9.0,
    kotki_w_chwilach_relaksu: 20.5,
    wilki_wyjące_w_dziczy: 7.5,
    motyle_z_rozłożonymi_skrzydłami: 18.5,
  },
  {
    month: "2023-04",
    pejzażyste_kwiaty_i_liście: 8.0,
    nieustraszone_tygrysy: 6.5,
    kotki_w_chwilach_relaksu: 18.5,
    wilki_wyjące_w_dziczy: 6.0,
    motyle_z_rozłożonymi_skrzydłami: 17.0,
  },
  {
    month: "2023-05",
    pejzażyste_kwiaty_i_liście: 9.0,
    nieustraszone_tygrysy: 5.5,
    kotki_w_chwilach_relaksu: 23.0,
    wilki_wyjące_w_dziczy: 6.0,
    motyle_z_rozłożonymi_skrzydłami: 13.5,
  },
  {
    month: "2023-06",
    pejzażyste_kwiaty_i_liście: 11.5,
    nieustraszone_tygrysy: 7.5,
    kotki_w_chwilach_relaksu: 26.5,
    wilki_wyjące_w_dziczy: 5.5,
    motyle_z_rozłożonymi_skrzydłami: 14.5,
  },
  {
    month: "2023-07",
    pejzażyste_kwiaty_i_liście: 11.5,
    nieustraszone_tygrysy: 6.5,
    kotki_w_chwilach_relaksu: 23.5,
    wilki_wyjące_w_dziczy: 5.5,
    motyle_z_rozłożonymi_skrzydłami: 14.0,
  },
  {
    month: "2023-08",
    pejzażyste_kwiaty_i_liście: 7.0,
    nieustraszone_tygrysy: 4.0,
    kotki_w_chwilach_relaksu: 19.0,
    wilki_wyjące_w_dziczy: 5.5,
    motyle_z_rozłożonymi_skrzydłami: 14.0,
  },
  {
    month: "2023-09",
    pejzażyste_kwiaty_i_liście: 5.0,
    nieustraszone_tygrysy: 4.0,
    kotki_w_chwilach_relaksu: 17.0,
    wilki_wyjące_w_dziczy: 5.5,
    motyle_z_rozłożonymi_skrzydłami: 13.0,
  },
  {
    month: "2023-10",
    pejzażyste_kwiaty_i_liście: 6.5,
    nieustraszone_tygrysy: 5.5,
    kotki_w_chwilach_relaksu: 20.0,
    wilki_wyjące_w_dziczy: 8.0,
    motyle_z_rozłożonymi_skrzydłami: 10.5,
  },
  {
    month: "2023-11",
    pejzażyste_kwiaty_i_liście: 8.0,
    nieustraszone_tygrysy: 4.0,
    kotki_w_chwilach_relaksu: 19.5,
    wilki_wyjące_w_dziczy: 6.0,
    motyle_z_rozłożonymi_skrzydłami: 14.0,
  },
  {
    month: "2023-12",
    pejzażyste_kwiaty_i_liście: 8.5,
    nieustraszone_tygrysy: 3.5,
    kotki_w_chwilach_relaksu: 23.0,
    wilki_wyjące_w_dziczy: 6.5,
    motyle_z_rozłożonymi_skrzydłami: 19.5,
  },
  {
    month: "2024-01",
    pejzażyste_kwiaty_i_liście: 10.0,
    nieustraszone_tygrysy: 4.0,
    kotki_w_chwilach_relaksu: 28.0,
    wilki_wyjące_w_dziczy: 8.5,
    motyle_z_rozłożonymi_skrzydłami: 16.5,
  },
  {
    month: "2024-02",
    pejzażyste_kwiaty_i_liście: 14.5,
    nieustraszone_tygrysy: 2.0,
    kotki_w_chwilach_relaksu: 27.0,
    wilki_wyjące_w_dziczy: 6.5,
    motyle_z_rozłożonymi_skrzydłami: 13.0,
  },
  {
    month: "2024-03",
    pejzażyste_kwiaty_i_liście: 11.0,
    nieustraszone_tygrysy: 2.0,
    kotki_w_chwilach_relaksu: 22.0,
    wilki_wyjące_w_dziczy: 6.5,
    motyle_z_rozłożonymi_skrzydłami: 12.0,
  },
  {
    month: "2024-04",
    pejzażyste_kwiaty_i_liście: 7.5,
    nieustraszone_tygrysy: 6.0,
    kotki_w_chwilach_relaksu: 25.5,
    wilki_wyjące_w_dziczy: 4.5,
    motyle_z_rozłożonymi_skrzydłami: 16.0,
  },
  {
    month: "2024-05",
    pejzażyste_kwiaty_i_liście: 12.5,
    nieustraszone_tygrysy: 7.5,
    kotki_w_chwilach_relaksu: 27.5,
    wilki_wyjące_w_dziczy: 2.5,
    motyle_z_rozłożonymi_skrzydłami: 18.0,
  },
  {
    month: "2024-06",
    pejzażyste_kwiaty_i_liście: 17.5,
    nieustraszone_tygrysy: 6.0,
    kotki_w_chwilach_relaksu: 24.5,
    wilki_wyjące_w_dziczy: 4.0,
    motyle_z_rozłożonymi_skrzydłami: 14.5,
  },
  {
    month: "2024-07",
    pejzażyste_kwiaty_i_liście: 15.0,
    nieustraszone_tygrysy: 8.5,
    kotki_w_chwilach_relaksu: 26.5,
    wilki_wyjące_w_dziczy: 5.0,
    motyle_z_rozłożonymi_skrzydłami: 15.5,
  },
  {
    month: "2024-08",
    pejzażyste_kwiaty_i_liście: 12.5,
    nieustraszone_tygrysy: 7.5,
    kotki_w_chwilach_relaksu: 33.0,
    wilki_wyjące_w_dziczy: 8.0,
    motyle_z_rozłożonymi_skrzydłami: 22.5,
  },
  {
    month: "2024-09",
    pejzażyste_kwiaty_i_liście: 17.5,
    nieustraszone_tygrysy: 5.0,
    kotki_w_chwilach_relaksu: 35.0,
    wilki_wyjące_w_dziczy: 11.5,
    motyle_z_rozłożonymi_skrzydłami: 31.5,
  },
  {
    month: "2024-10",
    pejzażyste_kwiaty_i_liście: 20.5,
    nieustraszone_tygrysy: 8.0,
    kotki_w_chwilach_relaksu: 31.0,
    wilki_wyjące_w_dziczy: 11.0,
    motyle_z_rozłożonymi_skrzydłami: 31.0,
  },
  {
    month: "2024-11",
    pejzażyste_kwiaty_i_liście: 12.0,
    nieustraszone_tygrysy: 5.5,
    kotki_w_chwilach_relaksu: 17.5,
    wilki_wyjące_w_dziczy: 5.0,
    motyle_z_rozłożonymi_skrzydłami: 13.5,
  },
];

const chartConfig: ChartConfig = {
  kotki_w_chwilach_relaksu: {
    label: "🐈 Kotki w chwilach relaksu",
    color: "hsl(var(--chart-1))",
    // icon: <div>🐈</div>,
  },
  motyle_z_rozłożonymi_skrzydłami: {
    label: "🦋 Motyle ze skrzydłami",
    color: "hsl(var(--chart-2))",
  },
  pejzażyste_kwiaty_i_liście: {
    label: "🌸 Pejzażyste kwiaty i liście",
    color: "hsl(210, 100%, 50%)",
  },
  wilki_wyjące_w_dziczy: {
    label: "🐺 Wilki wyjące w dziczy",
    color: "hsl(330, 100%, 40%)",
  },
  nieustraszone_tygrysy: {
    label: "🐅 Nieustraszone tygrysy",
    color: "hsl(var(--chart-4))",
  },
};

export default function TopicAreaChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tattoo Content Trends</CardTitle>
        <CardDescription>
          Showing total counts of tattoo topics by category
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
              <Tooltip
                content={<ChartTooltipContent indicator="line" />}
                cursor={false}
                defaultIndex={5}
              />
              <defs>
                {Object.entries(chartConfig).map(([key, config]) => (
                  <linearGradient
                    key={key}
                    id={`fill${key}`}
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor={config.color}
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor={config.color}
                      stopOpacity={0.1}
                    />
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
