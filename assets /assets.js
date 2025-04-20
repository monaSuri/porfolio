import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import gitHub_icon from './Github.png';
import linkedIn_icon from './linkedin.png';
import Instagram_icon from './instagram.png';
import css_icon from './CSS.png';
import js_icon from './JavaScript.png';
import html_icon from './HTML.png';
import react_icon from './React.png';
import flutter_icon from './Flutter.png';
import python_icon from './Python.png';
import java_icon from './Java.png';
import node_icon from './Node.png';
import frontend_icon from './developer-icon.png'
import learn_icon from './learn-icon.png';
import qa_icon from './qa-icon.png';
import phone_icon from './phone-icon.png';

export const assets = {
    gitHub_icon,
    linkedIn_icon,
    Instagram_icon,
    css_icon,
    js_icon,    
    html_icon,
    react_icon,
    flutter_icon,
    python_icon,
    java_icon,
    node_icon,
    frontend_icon,
    learn_icon,
    qa_icon,
    phone_icon,
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const projectsData = [
    {
        title: 'MEMO',
        description: 'Mobile App',
        bgImage: '/work-1.png',
    },
    {
        title: 'Ticketing System',
        description: 'Web Application',
        bgImage: '/work-2.png',
    },
    {
        title: 'Life on Land',
        description: 'Web Appl',
        bgImage: '/work-3.png',
    },
    
    {
        title: 'Portfolio Website',
        description: 'Web Application',
        bgImage: '/work-4.png',
    },

    {
        title: 'E-Commerce Website',
        description: 'Ongoing Project',
        bgImage: '/work-4.png',
    },

]

export const goalsData = [
    { icon: assets.web_icon, title: 'Web Developer', description: 'Creating modern, mobile friendly websites with a focus on performance and usability.'},
    { icon: assets.frontend_icon, title: 'Frontend Developer', description: 'Building clean, responsive UIs using HTML, CSS, JavaScript, React, and Flutter.'},
    { icon: assets.qa_icon, title: 'QA Engineer', description: 'Testing apps and websites to ensure smooth, bug-free user experiences.'},
    { icon: assets.learn_icon, title: 'Open to Learning', description: 'Curious, adaptable, and always ready to grow through real world experience and teamwork.'},
]

export const infoList = [
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description_1: 'BEng Software Engineering undergraduate', description_2:'Second Year', },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description_1: 'Completed 3 projects & Ongoing 1 project', description_2:'(including a mobile app)'  }
];

export const languageData = [
    assets.html_icon, assets.css_icon, assets.js_icon, assets.flutter_icon, assets.react_icon, assets.python_icon, assets.java_icon, assets.node_icon
]