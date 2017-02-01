Rails.application.routes.draw do
    root to: 'pages#home'
    get 'about', to: 'pages#about'
    get 'FAQ', to: 'pages#FAQ'
end
