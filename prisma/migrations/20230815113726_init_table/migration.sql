-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `password` VARCHAR(191) NOT NULL,
    `contact` VARCHAR(191) NULL,
    `pic_url` VARCHAR(191) NULL,
    `department` ENUM('NONE', 'EST', 'COLLECTOR', 'DYCOLLECTOR', 'SHO') NOT NULL DEFAULT 'NONE',
    `role` ENUM('NONE', 'SYSTEM', 'ADMIN', 'COLLECTOR', 'DYCOLLECTOR', 'SUPERITENDANT', 'LDC', 'UDC', 'SHO', 'USER') NOT NULL DEFAULT 'NONE',
    `otp` VARCHAR(191) NULL,
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `village` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `survey` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `villageId` INTEGER NOT NULL,
    `survey_no` VARCHAR(191) NOT NULL,
    `sub_division` VARCHAR(191) NULL,
    `owner_name` VARCHAR(191) NOT NULL,
    `area` VARCHAR(191) NOT NULL,
    `zone` VARCHAR(191) NULL,
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `query` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `stage` ENUM('NONE', 'MARRIAGE', 'RELIGIOUS', 'ROADSHOW', 'GENERIC') NOT NULL DEFAULT 'NONE',
    `form_id` INTEGER NOT NULL,
    `form_status` INTEGER NOT NULL,
    `to_user_id` INTEGER NOT NULL,
    `from_user_id` INTEGER NOT NULL,
    `query_type` ENUM('NONE', 'INTRA', 'INTER', 'PUBLIC') NOT NULL DEFAULT 'NONE',
    `doc_url` VARCHAR(191) NULL,
    `remark` VARCHAR(191) NOT NULL,
    `query_status` ENUM('NONE', 'SENT', 'RECEIVED', 'REPLIED', 'RESOLVED') NOT NULL DEFAULT 'NONE',
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `common` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `form_type` ENUM('NONE', 'MARRIAGE', 'RELIGIOUS', 'ROADSHOW', 'GENERIC') NOT NULL DEFAULT 'NONE',
    `form_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `auth_user_id` VARCHAR(191) NULL,
    `focal_user_id` VARCHAR(191) NULL,
    `intra_user_id` VARCHAR(191) NULL,
    `inter_user_id` VARCHAR(191) NULL,
    `village` VARCHAR(191) NULL,
    `name` VARCHAR(191) NOT NULL,
    `number` VARCHAR(191) NOT NULL,
    `event_date` DATETIME(3) NOT NULL,
    `form_status` INTEGER NULL,
    `query_status` ENUM('NONE', 'SUBMIT', 'INPROCESS', 'QUERYRAISED', 'APPROVED', 'REJCTED', 'CERTIFICATEGRANT', 'COMPLETED') NOT NULL DEFAULT 'NONE',
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `marriage_form` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `user_uid` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `mobile` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `village_id` INTEGER NULL,
    `from_date` DATETIME(3) NULL,
    `to_date` DATETIME(3) NULL,
    `event_name` VARCHAR(191) NULL,
    `event_address` VARCHAR(191) NULL,
    `relation` VARCHAR(191) NULL,
    `witness_1_url` VARCHAR(191) NULL,
    `witness_2_url` VARCHAR(191) NULL,
    `applicant_uid_url` VARCHAR(191) NULL,
    `undertaking_url` VARCHAR(191) NULL,
    `signature_url` VARCHAR(191) NULL,
    `iagree` ENUM('NONE', 'YES', 'NO') NOT NULL DEFAULT 'NONE',
    `remarks` VARCHAR(191) NULL,
    `other_remarks` VARCHAR(191) NULL,
    `rejection_reason` VARCHAR(191) NULL,
    `condition_to_follow` VARCHAR(191) NULL,
    `certificate_id` VARCHAR(191) NULL,
    `certificate_date` DATETIME(3) NULL,
    `certificate_url` VARCHAR(191) NULL,
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `roadshow_form` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `user_uid` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `mobile` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `village_id` INTEGER NULL,
    `from_date` DATETIME(3) NULL,
    `to_date` DATETIME(3) NULL,
    `event_name` VARCHAR(191) NULL,
    `event_address` VARCHAR(191) NULL,
    `route_info` VARCHAR(191) NULL,
    `relation` VARCHAR(191) NULL,
    `certificate_id` VARCHAR(191) NULL,
    `certificate_date` DATETIME(3) NULL,
    `certificate_url` VARCHAR(191) NULL,
    `doc_1_url` VARCHAR(191) NULL,
    `doc_2_url` VARCHAR(191) NULL,
    `applicant_uid_url` VARCHAR(191) NULL,
    `undertaking_url` VARCHAR(191) NULL,
    `signature_url` VARCHAR(191) NULL,
    `iagree` ENUM('NONE', 'YES', 'NO') NOT NULL DEFAULT 'NONE',
    `remarks` VARCHAR(191) NULL,
    `other_remarks` VARCHAR(191) NULL,
    `rejection_reason` VARCHAR(191) NULL,
    `condition_to_follow` VARCHAR(191) NULL,
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `religious_form` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `user_uid` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `mobile` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `village_id` INTEGER NULL,
    `from_date` DATETIME(3) NULL,
    `to_date` DATETIME(3) NULL,
    `event_name` VARCHAR(191) NULL,
    `event_address` VARCHAR(191) NULL,
    `route_info` VARCHAR(191) NULL,
    `relation` VARCHAR(191) NULL,
    `certificate_id` VARCHAR(191) NULL,
    `certificate_date` DATETIME(3) NULL,
    `certificate_url` VARCHAR(191) NULL,
    `doc_1_url` VARCHAR(191) NULL,
    `doc_2_url` VARCHAR(191) NULL,
    `applicant_uid_url` VARCHAR(191) NULL,
    `undertaking_url` VARCHAR(191) NULL,
    `signature_url` VARCHAR(191) NULL,
    `iagree` ENUM('NONE', 'YES', 'NO') NOT NULL DEFAULT 'NONE',
    `remarks` VARCHAR(191) NULL,
    `other_remarks` VARCHAR(191) NULL,
    `rejection_reason` VARCHAR(191) NULL,
    `condition_to_follow` VARCHAR(191) NULL,
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `generic_form` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `user_uid` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `mobile` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `village_id` INTEGER NULL,
    `from_date` DATETIME(3) NULL,
    `to_date` DATETIME(3) NULL,
    `event_name` VARCHAR(191) NULL,
    `event_address` VARCHAR(191) NULL,
    `route_info` VARCHAR(191) NULL,
    `relation` VARCHAR(191) NULL,
    `certificate_id` VARCHAR(191) NULL,
    `certificate_date` DATETIME(3) NULL,
    `certificate_url` VARCHAR(191) NULL,
    `doc_1_url` VARCHAR(191) NULL,
    `doc_2_url` VARCHAR(191) NULL,
    `applicant_uid_url` VARCHAR(191) NULL,
    `undertaking_url` VARCHAR(191) NULL,
    `signature_url` VARCHAR(191) NULL,
    `iagree` ENUM('NONE', 'YES', 'NO') NOT NULL DEFAULT 'NONE',
    `remarks` VARCHAR(191) NULL,
    `other_remarks` VARCHAR(191) NULL,
    `rejection_reason` VARCHAR(191) NULL,
    `condition_to_follow` VARCHAR(191) NULL,
    `status` ENUM('NONE', 'ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dealing_hand` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `file_type` ENUM('NONE', 'MARRIAGE', 'RELIGIOUS', 'ROADSHOW', 'GENERIC') NOT NULL DEFAULT 'NONE',
    `collector` BOOLEAN NOT NULL DEFAULT false,
    `dycollector` BOOLEAN NOT NULL DEFAULT false,
    `suptd` BOOLEAN NOT NULL DEFAULT false,
    `ldc` BOOLEAN NOT NULL DEFAULT false,
    `udc` BOOLEAN NOT NULL DEFAULT false,
    `sho` BOOLEAN NOT NULL DEFAULT false,
    `dept1` BOOLEAN NOT NULL DEFAULT false,
    `dept2` BOOLEAN NOT NULL DEFAULT false,
    `dept3` BOOLEAN NOT NULL DEFAULT false,
    `dept4` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `payment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `form_type` ENUM('NONE', 'MARRIAGE', 'RELIGIOUS', 'ROADSHOW', 'GENERIC') NOT NULL DEFAULT 'NONE',
    `form_id` INTEGER NOT NULL,
    `deptuser_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `type1` INTEGER NOT NULL,
    `amount1` INTEGER NOT NULL,
    `type2` INTEGER NOT NULL,
    `amount2` INTEGER NOT NULL,
    `type3` INTEGER NOT NULL,
    `amount3` INTEGER NOT NULL,
    `daycount` INTEGER NOT NULL,
    `paymentamout` INTEGER NOT NULL,
    `reference` VARCHAR(191) NULL,
    `paymentType` ENUM('NONE', 'CASH', 'CHEQUE', 'NETBANKING', 'CCDC', 'UPI') NOT NULL DEFAULT 'NONE',
    `paymentstatus` ENUM('NONE', 'PENDING', 'PAID') NOT NULL DEFAULT 'NONE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `survey` ADD CONSTRAINT `survey_villageId_fkey` FOREIGN KEY (`villageId`) REFERENCES `village`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `query` ADD CONSTRAINT `query_to_user_id_fkey` FOREIGN KEY (`to_user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `query` ADD CONSTRAINT `query_from_user_id_fkey` FOREIGN KEY (`from_user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `common` ADD CONSTRAINT `common_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `marriage_form` ADD CONSTRAINT `marriage_form_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `marriage_form` ADD CONSTRAINT `marriage_form_village_id_fkey` FOREIGN KEY (`village_id`) REFERENCES `village`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `roadshow_form` ADD CONSTRAINT `roadshow_form_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `roadshow_form` ADD CONSTRAINT `roadshow_form_village_id_fkey` FOREIGN KEY (`village_id`) REFERENCES `village`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `religious_form` ADD CONSTRAINT `religious_form_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `religious_form` ADD CONSTRAINT `religious_form_village_id_fkey` FOREIGN KEY (`village_id`) REFERENCES `village`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `generic_form` ADD CONSTRAINT `generic_form_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `generic_form` ADD CONSTRAINT `generic_form_village_id_fkey` FOREIGN KEY (`village_id`) REFERENCES `village`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payment` ADD CONSTRAINT `payment_deptuser_id_fkey` FOREIGN KEY (`deptuser_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payment` ADD CONSTRAINT `payment_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
