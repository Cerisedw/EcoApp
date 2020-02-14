import $ from 'jquery';
import { signUp } from './funcJS/sign';
import { home } from './funcJS/home';

$('#signup').on('click', signUp);
$('.logo').on('click', home);
