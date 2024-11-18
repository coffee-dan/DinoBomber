
export default class Map {
    constructor() {
        this.cols = 60
        this.rows = 44
        this.tileSize = 16

        this.tiles = [
            1, 1, 1, 1, 1, 1, 1, 1,    1,    1,    1,    1, 1, 1, 1, 1,    1,    1,    1,    1, 1, 1, 1, 1,    1,    1,    1,    1, 1, 1, 1, 1,    1,    1,    1,    1, 1, 1, 1, 1,    1,    1,    1,    1, 1, 1, 1, 1,    1,    1,    1,    1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1,    1,    1,    1,    1, 1, 1, 1, 1,    1,    1,    1,    1, 1, 1, 1, 1,    1,    1,    1,    1, 1, 1, 1, 1,    1,    1,    1,    1, 1, 1, 1, 1,    1,    1,    1,    1, 1, 1, 1, 1,    1,    1,    1,    1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1,    1,    1,    1,    1, 1, 1, 1, 1,    1,    1,    1,    1, 1, 1, 1, 1,    1,    1,    1,    1, 1, 1, 1, 1,    1,    1,    1,    1, 1, 1, 1, 1,    1,    1,    1,    1, 1, 1, 1, 1,    1,    1,    1,    1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1,    1,    1,    1,    1, 1, 1, 1, 1,    1,    1,    1,    1, 1, 1, 1, 1,    1,    1,    1,    1, 1, 1, 1, 1,    1,    1,    1,    1, 1, 1, 1, 1,    1,    1,    1,    1, 1, 1, 1, 1,    1,    1,    1,    1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0, 1, 1, 1, 1,
            1, 1, 1, 1, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0, 1, 1, 1, 1,
            1, 1, 1, 1, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0, 1, 1, 1, 1,
            1, 1, 1, 1, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0, 1, 1, 1, 1,
            1, 1, 1, 1, 0, 0, 0, 0,  699,  700,  701,  702, 0, 0, 0, 0,  699,  700,  701,  702, 0, 0, 0, 0,  715,  716,  717,  718, 0, 0, 0, 0,  723,  724,  725,  726, 0, 0, 0, 0,  731,  732,  733,  734, 0, 0, 0, 0,  739,  740,  741,  742, 0, 0, 0, 0, 1, 1, 1, 1,
            1, 1, 1, 1, 0, 0, 0, 0,  759,  760,  761,  762, 0, 0, 0, 0,  759,  760,  761,  762, 0, 0, 0, 0,  775,  776,  777,  778, 0, 0, 0, 0,  783,  784,  785,  786, 0, 0, 0, 0,  791,  792,  793,  794, 0, 0, 0, 0,  799,  800,  801,  802, 0, 0, 0, 0, 1, 1, 1, 1,
            1, 1, 1, 1, 0, 0, 0, 0,  819,  820,  821,  822, 0, 0, 0, 0,  819,  820,  821,  822, 0, 0, 0, 0,  835,  836,  837,  838, 0, 0, 0, 0,  843,  844,  845,  846, 0, 0, 0, 0,  851,  852,  853,  854, 0, 0, 0, 0,  859,  860,  861,  862, 0, 0, 0, 0, 1, 1, 1, 1,
            1, 1, 1, 1, 0, 0, 0, 0,  879,  880,  881,  882, 0, 0, 0, 0,  879,  880,  881,  882, 0, 0, 0, 0,  895,  896,  897,  898, 0, 0, 0, 0,  903,  904,  905,  906, 0, 0, 0, 0,  911,  912,  913,  914, 0, 0, 0, 0,  919,  920,  921,  922, 0, 0, 0, 0, 1, 1, 1, 1,
            1, 1, 1, 1, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0, 1, 1, 1, 1,
            1, 1, 1, 1, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0, 1, 1, 1, 1,
            1, 1, 1, 1, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0, 1, 1, 1, 1,
            1, 1, 1, 1, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0, 1, 1, 1, 1,
            1, 1, 1, 1, 0, 0, 0, 0,  699,  700,  701,  702, 0, 0, 0, 0, 1187, 1188, 1189, 1190, 0, 0, 0, 0, 1195, 1196, 1197, 1198, 0, 0, 0, 0, 1195, 1196, 1197, 1198, 0, 0, 0, 0, 1211, 1212, 1213, 1214, 0, 0, 0, 0, 1195, 1196, 1197, 1198, 0, 0, 0, 0, 1, 1, 1, 1,
            1, 1, 1, 1, 0, 0, 0, 0,  759,  760,  761,  762, 0, 0, 0, 0, 1247, 1248, 1249, 1250, 0, 0, 0, 0, 1255, 1256, 1257, 1258, 0, 0, 0, 0, 1255, 1256, 1257, 1258, 0, 0, 0, 0, 1271, 1272, 1273, 1274, 0, 0, 0, 0, 1255, 1256, 1257, 1258, 0, 0, 0, 0, 1, 1, 1, 1,
            1, 1, 1, 1, 0, 0, 0, 0,  819,  820,  821,  822, 0, 0, 0, 0, 1307, 1308, 1309, 1310, 0, 0, 0, 0, 1315, 1316, 1317, 1318, 0, 0, 0, 0, 1315, 1316, 1317, 1318, 0, 0, 0, 0, 1331, 1332, 1333, 1334, 0, 0, 0, 0, 1315, 1316, 1317, 1318, 0, 0, 0, 0, 1, 1, 1, 1,
            1, 1, 1, 1, 0, 0, 0, 0,  879,  880,  881,  882, 0, 0, 0, 0, 1367, 1368, 1369, 1370, 0, 0, 0, 0, 1375, 1376, 1377, 1378, 0, 0, 0, 0, 1375, 1376, 1377, 1378, 0, 0, 0, 0, 1391, 1392, 1393, 1394, 0, 0, 0, 0, 1375, 1376, 1377, 1378, 0, 0, 0, 0, 1, 1, 1, 1,
            1, 1, 1, 1, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0, 1, 1, 1, 1,
            1, 1, 1, 1, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0, 1, 1, 1, 1,
            1, 1, 1, 1, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0, 1, 1, 1, 1,
            1, 1, 1, 1, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0, 1, 1, 1, 1,
            1, 1, 1, 1, 0, 0, 0, 0, 1659, 1660, 1661, 1662, 0, 0, 0, 0, 1667, 1668, 1669, 1670, 0, 0, 0, 0, 1675, 1676, 1677, 1678, 0, 0, 0, 0, 1683, 1684, 1685, 1686, 0, 0, 0, 0, 1683, 1684, 1685, 1686, 0, 0, 0, 0, 1683, 1684, 1685, 1686, 0, 0, 0, 0, 1, 1, 1, 1,
            1, 1, 1, 1, 0, 0, 0, 0, 1719, 1720, 1721, 1722, 0, 0, 0, 0, 1727, 1728, 1729, 1730, 0, 0, 0, 0, 1735, 1736, 1737, 1738, 0, 0, 0, 0, 1743, 1744, 1745, 1746, 0, 0, 0, 0, 1743, 1744, 1745, 1746, 0, 0, 0, 0, 1743, 1744, 1745, 1746, 0, 0, 0, 0, 1, 1, 1, 1,
            1, 1, 1, 1, 0, 0, 0, 0, 1779, 1780, 1781, 1782, 0, 0, 0, 0, 1787, 1788, 1789, 1790, 0, 0, 0, 0, 1795, 1796, 1797, 1798, 0, 0, 0, 0, 1803, 1804, 1805, 1806, 0, 0, 0, 0, 1803, 1804, 1805, 1806, 0, 0, 0, 0, 1803, 1804, 1805, 1806, 0, 0, 0, 0, 1, 1, 1, 1,
            1, 1, 1, 1, 0, 0, 0, 0, 1839, 1840, 1841, 1842, 0, 0, 0, 0, 1847, 1848, 1849, 1850, 0, 0, 0, 0, 1855, 1856, 1857, 1858, 0, 0, 0, 0, 1863, 1864, 1865, 1866, 0, 0, 0, 0, 1863, 1864, 1865, 1866, 0, 0, 0, 0, 1863, 1864, 1865, 1866, 0, 0, 0, 0, 1, 1, 1, 1,
            1, 1, 1, 1, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0, 1, 1, 1, 1,
            1, 1, 1, 1, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0, 1, 1, 1, 1,
            1, 1, 1, 1, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0, 1, 1, 1, 1,
            1, 1, 1, 1, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0, 1, 1, 1, 1,
            1, 1, 1, 1, 0, 0, 0, 0, 1683, 1684, 1685, 1686, 0, 0, 0, 0, 1683, 1684, 1685, 1686, 0, 0, 0, 0, 1683, 1684, 1685, 1686, 0, 0, 0, 0, 2163, 2164, 2165, 2166, 0, 0, 0, 0, 1683, 1684, 1685, 1686, 0, 0, 0, 0, 2179, 2180, 2181, 2182, 0, 0, 0, 0, 1, 1, 1, 1,
            1, 1, 1, 1, 0, 0, 0, 0, 1743, 1744, 1745, 1746, 0, 0, 0, 0, 1743, 1744, 1745, 1746, 0, 0, 0, 0, 1743, 1744, 1745, 1746, 0, 0, 0, 0, 2223, 2224, 2225, 2226, 0, 0, 0, 0, 1743, 1744, 1745, 1746, 0, 0, 0, 0, 2239, 2240, 2241, 2242, 0, 0, 0, 0, 1, 1, 1, 1,
            1, 1, 1, 1, 0, 0, 0, 0, 1803, 1804, 1805, 1806, 0, 0, 0, 0, 1803, 1804, 1805, 1806, 0, 0, 0, 0, 1803, 1804, 1805, 1806, 0, 0, 0, 0, 2283, 2284, 2285, 2286, 0, 0, 0, 0, 1803, 1804, 1805, 1806, 0, 0, 0, 0, 2299, 2300, 2301, 2302, 0, 0, 0, 0, 1, 1, 1, 1,
            1, 1, 1, 1, 0, 0, 0, 0, 1863, 1864, 1865, 1866, 0, 0, 0, 0, 1863, 1864, 1865, 1866, 0, 0, 0, 0, 1863, 1864, 1865, 1866, 0, 0, 0, 0, 2343, 2344, 2345, 2346, 0, 0, 0, 0, 1863, 1864, 1865, 1866, 0, 0, 0, 0, 2359, 2360, 2361, 2362, 0, 0, 0, 0, 1, 1, 1, 1,
            1, 1, 1, 1, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0, 1, 1, 1, 1,
            1, 1, 1, 1, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0, 1, 1, 1, 1,
            1, 1, 1, 1, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0, 1, 1, 1, 1,
            1, 1, 1, 1, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0,    0,    0,    0,    0, 0, 0, 0, 0, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1,    1,    1,    1,    1, 1, 1, 1, 1,    1,    1,    1,    1, 1, 1, 1, 1,    1,    1,    1,    1, 1, 1, 1, 1,    1,    1,    1,    1, 1, 1, 1, 1,    1,    1,    1,    1, 1, 1, 1, 1,    1,    1,    1,    1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1,    1,    1,    1,    1, 1, 1, 1, 1,    1,    1,    1,    1, 1, 1, 1, 1,    1,    1,    1,    1, 1, 1, 1, 1,    1,    1,    1,    1, 1, 1, 1, 1,    1,    1,    1,    1, 1, 1, 1, 1,    1,    1,    1,    1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1,    1,    1,    1,    1, 1, 1, 1, 1,    1,    1,    1,    1, 1, 1, 1, 1,    1,    1,    1,    1, 1, 1, 1, 1,    1,    1,    1,    1, 1, 1, 1, 1,    1,    1,    1,    1, 1, 1, 1, 1,    1,    1,    1,    1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 1, 1, 1, 1, 1, 1,    1,    1,    1,    1, 1, 1, 1, 1,    1,    1,    1,    1, 1, 1, 1, 1,    1,    1,    1,    1, 1, 1, 1, 1,    1,    1,    1,    1, 1, 1, 1, 1,    1,    1,    1,    1, 1, 1, 1, 1,    1,    1,    1,    1, 1, 1, 1, 1, 1, 1, 1, 1,
        ]
        //dino size is prob 64
    }

   draw(ctx) {
        const map = new Image()

        map.addEventListener('load', () => {
            ctx.clearRect(0, 0, 960, 704)
            ctx.drawImage(map, 0, 0, 960, 704, 0, 0, 960, 704)
        })
       map.src = "src/assets/newMap2.png";
    }

    getRow(pos) {
       //takes in this.y
       //420 will be on row 26
       return Math.floor(pos / this.tileSize);
    }

    getCol(pos) {
        //takes in this.x
        //660 will be on col 41
        return Math.floor(pos / this.tileSize);
    }

    getIndex(posX, posY) {
        let row = this.getRow(posY);
        let col = this.getCol(posX);
        return row * this.cols + col;
    }

    emptyTile(colX, rowY) {
        let idx = rowY * this.cols + colX;
        return this.tiles[idx] === 0
    }
}
