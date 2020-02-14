import $ from 'jquery';
import { signUp, signIn } from './funcJS/sign';
import { home } from './funcJS/home';

$('#signup').on('click', signUp);
$('#signin').on('click', signIn);
$('.logo').on('click', home);
