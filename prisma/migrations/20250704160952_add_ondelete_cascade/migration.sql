-- DropForeignKey
ALTER TABLE `estagiario` DROP FOREIGN KEY `Estagiario_empresaId_fkey`;

-- DropForeignKey
ALTER TABLE `relatorio` DROP FOREIGN KEY `Relatorio_estagiarioId_fkey`;

-- DropIndex
DROP INDEX `Estagiario_empresaId_fkey` ON `estagiario`;

-- DropIndex
DROP INDEX `Relatorio_estagiarioId_fkey` ON `relatorio`;

-- AddForeignKey
ALTER TABLE `Estagiario` ADD CONSTRAINT `Estagiario_empresaId_fkey` FOREIGN KEY (`empresaId`) REFERENCES `Empresa`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Relatorio` ADD CONSTRAINT `Relatorio_estagiarioId_fkey` FOREIGN KEY (`estagiarioId`) REFERENCES `Estagiario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
