import { element } from 'protractor';
import { CategoriesModule } from './../categories.module';
import { Category } from './../shared/category.model';
import { CategoryService } from './../shared/category.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  Categories: Category[] = [];

  constructor(private CategoryService: CategoryService) { }

  ngOnInit() {
    this.CategoryService.getAll().subscribe(
      Categories => this.Categories = Categories,
      error => alert ('Erro ao carregar lista')
    )
    }
      deleteCategory(category) {

        const mustDelete = confirm('Deseja realmente excluir este item?');

        if (mustDelete){
        this.CategoryService.delete(category.id).subscribe(
          () => this.Categories = this.Categories.filter(element => element != category),
          () => alert("erro ao tentar excluir")
        )
      }
      }

  }


