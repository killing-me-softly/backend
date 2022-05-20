"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsModule = void 0;
const common_1 = require("@nestjs/common");
const dal_module_1 = require("../../dal/dal.module");
const items_container_resolver_1 = require("./items.container.resolver");
const items_resolver_1 = require("./items.resolver");
const items_service_1 = require("./items.service");
let ItemsModule = class ItemsModule {
};
ItemsModule = __decorate([
    (0, common_1.Module)({
        imports: [dal_module_1.DalModule],
        providers: [
            items_service_1.ItemsService,
            items_resolver_1.ItemsResolver,
            items_container_resolver_1.OfficeEquipmentItemsContainerResolver,
            items_container_resolver_1.OfficeFurnitureItemsContainerResolver,
            items_container_resolver_1.SoftwareItemsContainerResolver,
        ],
        exports: [items_service_1.ItemsService],
    })
], ItemsModule);
exports.ItemsModule = ItemsModule;
//# sourceMappingURL=items.module.js.map