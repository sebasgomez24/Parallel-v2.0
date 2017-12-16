import { Component, trigger, state, style, transition, animate, keyframes, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

$.fn.moveIt = function(){
var $window = $(window);
var instances = [];

$(this).each(function(){
	instances.push(new moveItItem($(this)));
});

window.addEventListener('scroll', function(){
	var scrollTop = $window.scrollTop();
	instances.forEach(function(inst){
    	inst.update(scrollTop);
  	});
	}, {passive: true});
}

var moveItItem = function(el){
	this.el = $(el);
	this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop){
	this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
};

// Initialization
$(function(){
	$('[data-scroll-speed]').moveIt();
});



// https://codepen.io/JTParrett/pen/BkDie