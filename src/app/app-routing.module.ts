import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IntroGuard } from './guards/intro.guard';
import { AutoLoginGuard } from './guards/auto-login.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canLoad: [AutoLoginGuard]
  },
  {
    path: 'return-popup',
    loadChildren: () => import('./return-popup/return-popup.module').then( m => m.ReturnPopupPageModule)
  },
  {
    path: 'signup1',
    loadChildren: () => import('./signup1/signup1.module').then( m => m.Signup1PageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule),
    canLoad: [IntroGuard, AuthGuard]
  },
  {
    path: 'calendar-weekly',
    loadChildren: () => import('./calendar-weekly/calendar-weekly.module').then( m => m.CalendarWeeklyPageModule),
    canLoad: [AuthGuard]
  
  },
  {
    path: 'brand-builder',
    loadChildren: () => import('./brand-builder/brand-builder.module').then( m => m.BrandBuilderPageModule),
    canLoad: [AuthGuard]

  },
  {
    path: 'brandbuilder-yt-channel',
    loadChildren: () => import('./brandbuilder-yt-channel/brandbuilder-yt-channel.module').then( m => m.BrandbuilderYTChannelPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'brandbuilder-pp-edit',
    loadChildren: () => import('./brandbuilder-pp-edit/brandbuilder-pp-edit.module').then( m => m.BrandbuilderPpEditPageModule),
    canLoad: [AuthGuard]
  
  },
  {
    path: 'edit-goal',
    loadChildren: () => import('./edit-goal/edit-goal.module').then( m => m.EditGoalPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'create-yt-video',
    loadChildren: () => import('./create-yt-video/create-yt-video.module').then( m => m.CreateYTVideoPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'create-atweet',
    loadChildren: () => import('./create-atweet/create-atweet.module').then( m => m.CreateATweetPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'cross-promotion',
    loadChildren: () => import('./cross-promotion/cross-promotion.module').then( m => m.CrossPromotionPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'drafts',
    loadChildren: () => import('./drafts/drafts.module').then( m => m.DraftsPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'brandbuilder-cover-edit',
    loadChildren: () => import('./brandbuilder-cover-edit/brandbuilder-cover-edit.module').then( m => m.BrandbuilderCoverEditPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'signup-steps',
    loadChildren: () => import('./signup-steps/signup-steps.module').then( m => m.SignupStepsPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'create-promotional-tweets',
    loadChildren: () => import('./create-promotional-tweets/create-promotional-tweets.module').then( m => m.CreatePromotionalTweetsPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'upload-video',
    loadChildren: () => import('./upload-video/upload-video.module').then( m => m.UploadVideoPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'add-account',
    loadChildren: () => import('./add-account/add-account.module').then( m => m.AddAccountPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'reply-comments',
    loadChildren: () => import('./reply-comments/reply-comments.module').then( m => m.ReplyCommentsPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'idea-generator',
    loadChildren: () => import('./idea-generator/idea-generator.module').then( m => m.IdeaGeneratorPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'idea-generate-tweet',
    loadChildren: () => import('./idea-generate-tweet/idea-generate-tweet.module').then( m => m.IdeaGenerateTweetPageModule),
    canLoad: [AuthGuard]},
  {
    path: 'my-account',
    loadChildren: () => import('./my-account/my-account.module').then( m => m.MyAccountPageModule),
    canLoad: [AuthGuard]},
  {
    path: 'crosspromotion-choose-video',
    loadChildren: () => import('./crosspromotion-choose-video/crosspromotion-choose-video.module').then( m => m.CrosspromotionChooseVideoPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'community-center',
    loadChildren: () => import('./community-center/community-center.module').then( m => m.CommunityCenterPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'brandbuilder-twitter',
    loadChildren: () => import('./brandbuilder-twitter/brandbuilder-twitter.module').then( m => m.BrandbuilderTwitterPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'update-password',
    loadChildren: () => import('./update-password/update-password.module').then( m => m.UpdatePasswordPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'contentcalendar-daily',
    loadChildren: () => import('./contentcalendar-daily/contentcalendar-daily.module').then( m => m.ContentcalendarDailyPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'chennel-trailer-settings',
    loadChildren: () => import('./chennel-trailer-settings/chennel-trailer-settings.module').then( m => m.ChennelTrailerSettingsPageModule),
    canLoad: [AuthGuard]},
  {
    path: 'contentcalendar-month',
    loadChildren: () => import('./contentcalendar-month/contentcalendar-month.module').then( m => m.ContentcalendarMonthPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'cross-promotion-write',
    loadChildren: () => import('./cross-promotion-write/cross-promotion-write.module').then( m => m.CrossPromotionWritePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'crosspromotion-metadata',
    loadChildren: () => import('./crosspromotion-metadata/crosspromotion-metadata.module').then( m => m.CrosspromotionMetadataPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'optimizeytpage',
    loadChildren: () => import('./optimizeytpage/optimizeytpage.module').then( m => m.OptimizeytpagePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'featuredchannels',
    loadChildren: () => import('./featuredchannels/featuredchannels.module').then( m => m.FeaturedchannelsPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'createytvideo-suggestions',
    loadChildren: () => import('./createytvideo-suggestions/createytvideo-suggestions.module').then( m => m.CreateytvideoSuggestionsPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'create-a-tweet-write',
    loadChildren: () => import('./create-a-tweet-write/create-a-tweet-write.module').then( m => m.CreateATweetWritePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'confirm',
    loadChildren: () => import('./confirm/confirm.module').then( m => m.ConfirmPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'cross-promotion-thumbnail',
    loadChildren: () => import('./cross-promotion-thumbnail/cross-promotion-thumbnail.module').then( m => m.CrossPromotionThumbnailPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'signup-createbrands',
    loadChildren: () => import('./signup-createbrands/signup-createbrands.module').then( m => m.SignupCreatebrandsPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'createtweets',
    loadChildren: () => import('./createtweets/createtweets.module').then( m => m.CreatetweetsPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'createytvideo-schedule',
    loadChildren: () => import('./createytvideo-schedule/createytvideo-schedule.module').then( m => m.CreateytvideoSchedulePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'createatweet-schedule',
    loadChildren: () => import('./createatweet-schedule/createatweet-schedule.module').then( m => m.CreateatweetSchedulePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'featuredchannels-search',
    loadChildren: () => import('./featuredchannels-search/featuredchannels-search.module').then( m => m.FeaturedchannelsSearchPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'createytvideo-scriptscreation',
    loadChildren: () => import('./createytvideo-scriptscreation/createytvideo-scriptscreation.module').then( m => m.CreateytvideoScriptscreationPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'edit-a-shelve',
    loadChildren: () => import('./edit-a-shelve/edit-a-shelve.module').then( m => m.EditAShelvePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'add-payment-methode',
    loadChildren: () => import('./add-payment-methode/add-payment-methode.module').then( m => m.AddPaymentMethodePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'add-a-shelve',
    loadChildren: () => import('./add-a-shelve/add-a-shelve.module').then( m => m.AddAShelvePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'add-goals',
    loadChildren: () => import('./add-goals/add-goals.module').then( m => m.AddGoalsPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'create-atweet-confirm',
    loadChildren: () => import('./create-atweet-confirm/create-atweet-confirm.module').then( m => m.CreateAtweetConfirmPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'crosspromotion-confirm',
    loadChildren: () => import('./crosspromotion-confirm/crosspromotion-confirm.module').then( m => m.CrosspromotionConfirmPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'done',
    loadChildren: () => import('./done/done.module').then( m => m.DonePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'brandbuilder-settings',
    loadChildren: () => import('./brandbuilder-settings/brandbuilder-settings.module').then( m => m.BrandbuilderSettingsPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'signup-createbrands-filled',
    loadChildren: () => import('./signup-createbrands-filled/signup-createbrands-filled.module').then( m => m.SignupCreatebrandsFilledPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'completed-daily-task',
    loadChildren: () => import('./completed-daily-task/completed-daily-task.module').then( m => m.CompletedDailyTaskPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'signup-goals',
    loadChildren: () => import('./signup-goals/signup-goals.module').then( m => m.SignupGoalsPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'createytvideo-uploading',
    loadChildren: () => import('./createytvideo-uploading/createytvideo-uploading.module').then( m => m.CreateytvideoUploadingPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'signup-goals-added',
    loadChildren: () => import('./signup-goals-added/signup-goals-added.module').then( m => m.SignupGoalsAddedPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'createytvideo-uploaded',
    loadChildren: () => import('./createytvideo-uploaded/createytvideo-uploaded.module').then( m => m.CreateytvideoUploadedPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'editaplaylist-settings',
    loadChildren: () => import('./editaplaylist-settings/editaplaylist-settings.module').then( m => m.EditaplaylistSettingsPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'addgoals-addnew',
    loadChildren: () => import('./addgoals-addnew/addgoals-addnew.module').then( m => m.AddgoalsAddnewPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'createytvideo-metadata',
    loadChildren: () => import('./createytvideo-metadata/createytvideo-metadata.module').then( m => m.CreateytvideoMetadataPageModule)
  },
  {
    path: 'createytvideo-thumbnail',
    loadChildren: () => import('./createytvideo-thumbnail/createytvideo-thumbnail.module').then( m => m.CreateytvideoThumbnailPageModule)
  },
  {
    path: 'a-buycaptions',
    loadChildren: () => import('./a-buycaptions/a-buycaptions.module').then( m => m.ABuycaptionsPageModule)
  },
  {
    path: 'createytvideo-captions',
    loadChildren: () => import('./createytvideo-captions/createytvideo-captions.module').then( m => m.CreateytvideoCaptionsPageModule)
  },
  {
    path: 'b-buycaptions-cardadded',
    loadChildren: () => import('./b-buycaptions-cardadded/b-buycaptions-cardadded.module').then( m => m.BBuycaptionsCardaddedPageModule)
  },
  {
    path: 'createytvideo-addtoplaylist',
    loadChildren: () => import('./createytvideo-addtoplaylist/createytvideo-addtoplaylist.module').then( m => m.CreateytvideoAddtoplaylistPageModule)
  },
  {
    path: 'createytvideo-confirm',
    loadChildren: () => import('./createytvideo-confirm/createytvideo-confirm.module').then( m => m.CreateytvideoConfirmPageModule)
  },
  {
    path: 'createytvideo-uploadvideo',
    loadChildren: () => import('./createytvideo-uploadvideo/createytvideo-uploadvideo.module').then( m => m.CreateytvideoUploadvideoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canLoad: [AutoLoginGuard]
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'edit-youtube-goals',
    loadChildren: () => import('./edit-youtube-goals/edit-youtube-goals.module').then( m => m.EditYoutubeGoalsPageModule)
  },
  {
    path: 'edit-twitter-goals',
    loadChildren: () => import('./edit-twitter-goals/edit-twitter-goals.module').then( m => m.EditTwitterGoalsPageModule)
  }
  // {
  //   path: 'twitter',
  //   loadChildren: () => import('./providers/twitter/twitter.module').then( m => m.TwitterPageModule)
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
