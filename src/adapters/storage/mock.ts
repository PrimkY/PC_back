export interface Motherboard {
  id: number;
  name: string;
  chipset: string;
  formFactor: string;
  socket: string;
  memorySlots: number;
  maxMemory: number;
}

export const motherboards: Motherboard[] = [
  {
    id: 1,
    name: 'ASUS ROG Strix Z490-E',
    chipset: 'Z490',
    formFactor: 'ATX',
    socket: 'LGA 1200',
    memorySlots: 4,
    maxMemory: 128,
  },
  {
    id: 2,
    name: 'MSI MPG Z390 Gaming Edge AC',
    chipset: 'Z390',
    formFactor: 'ATX',
    socket: 'LGA 1151',
    memorySlots: 4,
    maxMemory: 64,
  },
  {
    id: 3,
    name: 'Gigabyte Aorus X570 Master',
    chipset: 'X570',
    formFactor: 'ATX',
    socket: 'AM4',
    memorySlots: 4,
    maxMemory: 128,
  },
  {
    id: 4,
    name: 'ASRock B450M Pro4',
    chipset: 'B450',
    formFactor: 'Micro ATX',
    socket: 'AM4',
    memorySlots: 4,
    maxMemory: 64,
  },
  {
    id: 5,
    name: 'ASUS Prime H310M-E R2.0',
    chipset: 'H310',
    formFactor: 'Micro ATX',
    socket: 'LGA 1151',
    memorySlots: 2,
    maxMemory: 32,
  },
  {
    id: 6,
    name: 'MSI B550-A Pro',
    chipset: 'B550',
    formFactor: 'ATX',
    socket: 'AM4',
    memorySlots: 4,
    maxMemory: 128,
  },
  {
    id: 7,
    name: 'Gigabyte Z590 Aorus Elite AX',
    chipset: 'Z590',
    formFactor: 'ATX',
    socket: 'LGA 1200',
    memorySlots: 4,
    maxMemory: 128,
  },
  {
    id: 8,
    name: 'ASRock X299 Taichi',
    chipset: 'X299',
    formFactor: 'ATX',
    socket: 'LGA 2066',
    memorySlots: 8,
    maxMemory: 128,
  },
  {
    id: 9,
    name: 'ASUS TUF Gaming X570-Plus',
    chipset: 'X570',
    formFactor: 'ATX',
    socket: 'AM4',
    memorySlots: 4,
    maxMemory: 128,
  },
  {
    id: 10,
    name: 'MSI MEG Z490 Godlike',
    chipset: 'Z490',
    formFactor: 'ATX',
    socket: 'LGA 1200',
    memorySlots: 4,
    maxMemory: 128,
  },
];

console.log(motherboards);
